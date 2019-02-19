var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());//middleware 3th party
// To create a resourse
app.post('/todos', (req,res) => {
    var todo = new Todo({
        text:req.body.text,
        completed:req.body.completed, 
        completedAt:req.body.completedAt
    });

    todo.save().then((result) => {
        // sending back to user information
        res.send(200,result)


        // console.log('Successful',result);
    }).catch((err) => {
        // if error occur, user will get message
        res.send(400,err);


        // console.log('Error', err);
    });
})


app.listen(8080, () => {
    console.log();
    console.log('Server started on port 8080');
});

















