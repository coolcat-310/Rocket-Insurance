const express = require('express');
const router = express.Router();
const config = require('config');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const Profile = require('../../models/Profile');
const User = require('../../models/User');


/**
 * @route GET api/profile/me
 * @desc     Get current user's profile
 * @access   Private
 */
router.get('/me', auth, async (req, res)=> {
    try{
        // GET current profile based on current user's id.
        const profile  = await Profile.findOne({ user: req.user.id }).populate('User', ['name']);

        if(!profile){
            return res.status(400).json({ msg: 'There is no profile for this user'})
        }
        res.status(200).json(profile);
    }catch (e) {
        res.status(500).send('Server Error');
    }
});
/**
 * @route    POST api/profile
 * @desc     Create or update user profile
 * @access   Private
 */
router.post('/', [
    auth,
    [
        check('address', 'Address is required').not().isEmpty(),
        check('address.line_1', 'line_1 is required').not().isEmpty(),
        check('address.city', 'city is required').not().isEmpty(),
        check('address.region', 'Region is required').not().isEmpty(),
        check('address.postal', 'Postal is required').not().isEmpty(),
    ]
],async (req, res) => {
    // checks if there are errors with the Profile model, status and skills are required fields
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const {address, youtube, twitter, facebook, linkedin, instagram, qoute} = req.body;

    const profileFields = {};
    profileFields.user = req.user.id;

    profileFields.address = {...address};

    // Build social object
    profileFields.social = {};

    if(youtube) profileFields.social.youtube = youtube;
    if(twitter) profileFields.social.twitter = twitter;
    if(facebook) profileFields.social.facebook = facebook;
    if(linkedin) profileFields.social.linkedin = linkedin;
    if(instagram) profileFields.social.instagram = instagram;

    profileFields.qoute = qoute;

    try{
        let profile = await Profile.findOne({ user: req.user.id });

        if(profile){
            //Update Profile
            profile = await Profile.findOneAndUpdate(
                { user : req.user.id},
                { $set : profileFields},
                { new: true}
            );
            return res.json(profile);
        }

        // Create a Profile
        profile = new Profile(profileFields);

        await profile.save();
        res.status(201).json(profile);
    }catch(e){
        res.status(500).send('Server Error')
    }
});
/**
 * @route    GET api/profile
 * @desc     Get all profiles
 * @access   Public
 */
router.get('/', async (req, res)=>{
    try {
        const profiles = await Profile.find().populate('user', ['first_name', 'last_name']);
        res.json(profiles);
    }catch (e) {
        res.status(500).send('Server Error');
    }
});
/**
 * @route    GET api/profile/user/:user_id
 * @desc     Get profile by user ID
 * @access   Public
 */
router.get('/user/:user_id', async (req, res)=>{
    try {
        const user = req.params.user_id;
        const profile = await Profile.findOne({ user }).populate('user', ['first_name', 'last_name']);

        if(!profile){
            return res.status(404).json({ msg: 'Profile not found'});
        }
        res.json(profile);
    }catch (e) {

        if(e.kind == 'ObjectId'){
            return res.status(404).json({ msg: 'Profile not found'});
        }
        res.status(500).send('Server Error');
    }
});

/**
 * @route    DELETE api/profile
 * @desc     Delete profile, user & posts
 * @access   Private
 */

router.delete('/', auth,async (req, res)=>{
    try {
        // Remove profile
        await Profile.findOneAndRemove({user: req.user.id});
        // Remove user
        await User.findOneAndRemove({_id: req.user.id});
        res.json({msg: 'User Deleted'});
    }catch (e) {

        res.status(500).send('Server Error');
    }
});

module.exports = router;
