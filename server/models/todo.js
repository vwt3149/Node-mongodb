var mongoose = require('mongoose')

var Todo = mongoose.model('Todo', {
    text:{
        type:String,
        required:true,
        minlenght: 1,
        trim:true //removes space on beginning and end of string
    },
    completed: {
        type:Boolean,
        default: false
    },
    completedAt:{
        type:Number,
        default: null
    }
});

module.exports = {
   Todo     //es6 way
   //same as Todo = Todo
}