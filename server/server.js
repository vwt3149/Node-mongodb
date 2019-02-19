var express = require('express');
var bodyParser = require('body-parser')

var {mongoose} = require('./db/monguse');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());// takes josn and converting in to a object,attaching to a req object

app.post('/todos', (req, res) => {
    // console.log(req.body);
    var todo = new Todo({
        text:req.body.text,
        completed:req.body.completed,
        completedAt:req.body.completedAt
    })

    todo.save().then((result) => {
        console.log();
        console.log(`-----Successful------\n${result}\n--------`);
        
        res.send(result);
    }).catch((err) => {
        console.log();
        console. log(`======Something went wrong=======\n${err}\n=======`);
        res.status(400).send(err)
    });

})




app.listen(3000, ()=>{
    console.log('Server started on port:3000');
})






























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



// var TodoInfo = mongoose.model('User', {
//     Email:{
//         type: String,
//         required: true,
//         minlenght:1,
//         trim:true
//     },
//     Password:{
//         type:String,
//         required:true,
//         minlenght:10
//     }
// });

// var newTodo2 = new TodoInfo({
//     Email:'radnikara1223@gmail.com',
//     Password:12345678910
// });

// newTodo2.save().then((result) => {
//     console.log();
//     console.log(`Saveing was successful\n${result}`);
// }).catch((err) => {
//     console.log(`Unable to save${err}`);
// });