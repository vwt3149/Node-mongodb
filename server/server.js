var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// var Todo = mongoose.model('Todo', {
//     text:{
//         type:String,
//         required:true,
//         minlenght: 1,
//         trim:true //removes space on beginning and end of string
//     },
//     completed: {
//         type:Boolean,
//         default: false
//     },
//     complitedAt:{
//         type:Number,
//         default: null
//     }
// })

// var newTodo = new Todo({
//     text: 3,
//     completed: false
// });

// var {text}=newTodo; 
// newTodo.save().then((result) => {
//     console.log('---------------------');
//     console.log(`Result is: ${JSON.stringify(result,undefined,5)}`);
//     console.log('---------------------');
// },(err) => {
//     console.log(`-------------Something went wrong----------- ${err}`);
// });



var TodoInfo = mongoose.model('User', {
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

var newTodo2 = new TodoInfo({
    Email:'radnikara1223@gmail.com',
    Password:12345678910
});

newTodo2.save().then((result) => {
    console.log();
    console.log(`Saveing was successful\n${result}`);
}).catch((err) => {
    console.log(`Unable to save${err}`);
});