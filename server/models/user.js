var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlenght:1,
        trim: true
    }
});

module.exports = {User}
// var user = new User({
//     email:'radnikara100%@gmail.com'
// });

// user.save().then((result) => {
//     console.log('Successful', result);
// }).catch((err) => {
//     console.log('Eroor', err);
// });