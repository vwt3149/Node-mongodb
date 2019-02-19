var mongoose = require('mongoose');
// Creatin model
var Todo = mongoose.model('Todo', {
    text: {
       type:String,
       required:true,
       minlenght:1,
       trim: true
       
    },
    completed: {
       type:Boolean,
       default: false
    },
    completedAt: {
       type:Number,
       default: null
       
    }
});

module.exports = {Todo}





// // Setting value for model
// var newTodo = new Todo({
//    text:'radi',
//    completed:true,
//    completedAt:34243

// });
// // Saveing to database
// newTodo.save().then((result) => {
//    console.log('radi', result);
// }).catch((err) => {
//    console.log('Ne radi', err);
// });






