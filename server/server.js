var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
const {ObjectID} = require('mongodb');

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
const port = process.env.PORT || 8080;

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
        // console.log(`Successful\n ${result}`);


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
    });
});// End GET

app.get('/todos/:id', (req,res) => {
   var id = req.params.id;
   if(!ObjectID.isValid(id)){
     return  res.status(404).send('404, Page not found!')
   }

   Todo.findById(id).then((todo) => {
       if (!todo) {
          return res.status(404).send('');
       }

       res.send({todo});
   }).catch((err) => {
        res.status(400).send('Requset was not valid!', err)
   });
   

});


app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((result) => {
        if (!result) {
            return res.status(404).send({
                code:'404 Not found',
                req_id: id,
                message:'Id not found',
                time:new Date().toTimeString()
            })
        }

        res.status(200).send()
    }).catch((err) => {
        res.status(400).send();
    });
});

app.listen(port, () => {
    console.log();
    console.log(`---Server started on port ${port}------`);
});

module.exports = {app}















