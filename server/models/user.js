var mongoose = require('mongoose');

var User = mongoose.model('User', {
    Email:{
        type: String,
        required: true,
        minlenght:1,
        trim:true
    },
    Password:{
        type:String,
        required:true,
        minlenght:10
    }
});

module.exports = {
    User
}