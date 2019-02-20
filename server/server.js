var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());//middleware 3th party


// To create a resourse, POST
app.post('/todos', (req,res) => {
    var todo = new Todo({
        text:req.body.text,
        // completed:req.body.completed, 
        // completedAt:req.body.completedAt
    });

    todo.save().then((result) => {
        // sending back to user information
        res.send(result)
        console.log();
        console.log(`Successful\n ${result}`);


    }).catch((err) => {
        // if error occur, user will get message
        res.status(400).send(err);
        console.log();
        // console.log(`--Error occured-- ${err}`);
    });
});// End POST



app.get('/todos', (req, res) => {
    Todo.find().then((result) => {
        res.send({result});
    }, (err) => {
        res.status(400).send(err);
    })
});// End GET

app.listen(8080, () => {
    console.log();
    console.log('Server started on port 8080');
});

module.exports = {app}















