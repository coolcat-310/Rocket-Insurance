const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const config = require('config');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

/**
 * @route GET api/auth
 * @desc Test route
 * @access Private
 */
router.get('/', auth, async (req, res)=>{
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    }catch (e) {
        res.status(500).send('Server Error');
    }
});

/**
 * @route    POST api/auth
 * @desc     Authenticate User & token
 * @access   Public
 */
router.post('/',
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required').exists()
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
        const { email, password } = req.body;

        try{
            // See if the user exists
            let user = await User.findOne({ email });

            if(!user){
                return res.status(400).json({
                    errors: [{ msg: 'Invalid Credentials' }]
                })
            }

            // Check whether the password is a match
            const isMatch = await bcrypt.compare(password, user.password);

            if(!isMatch){
                return res.status(400).json({
                    errors: [{ msg: 'Invalid Credentials'}]
                })
            }

            // Return jsonwebtoken
            const payload = {
                user:{
                    id: user.id
                }
            };

            jwt.sign(payload, config.get('jwtSecret'), { expiresIn : 36000 }, (err, token)=>{
                if(err) throw err;
                res.json({ token });
            });

        } catch (e) {
            res.send(500).send('Server Error');
        }
});


module.exports = router;
