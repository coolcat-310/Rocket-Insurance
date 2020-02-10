const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    address: {
            line_1:{
                type: String,
                required: true
            },
            line_2:{
                type: String
            },
            city:{
                type: String,
                required: true
            },
            region:{
                type: String,
                required: true
            },
            postal:{
                type: String,
                required: true
            }
    },
    social: {
        youtube:{
            type: String
        },
        twitter:{
            type: String
        },
        facebook:{
            type: String
        },
        linkedin:{
            type: String
        },
        instagram:{
            type: String
        }
    },
    qoute: {
        type: Object
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;
