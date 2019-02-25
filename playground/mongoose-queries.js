const {mongoose} = require('./../server/db/mongoose');
const {ObjectID} = require('mongodb');
const {Todo} = require('./../server/models/todo');

var id = '5c70013326d093127096680e11';


if (!ObjectID.isValid(id)) {
    console.log('Id is not valid');
}
// mongoose dose not require to pass object id, it's convert by it self to an object
// Todo.find({
//     _id: id  
// }).then((todos) => {
//     if (todos.length === 0) {
//         return console.log('Id not found');
//     }
//     console.log(`Todos ${todos}`);
// });


// // find one returns only one querie, and it is first in list
// Todo.findOne({
//     _id: id  
// }).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log(`\nTodo ${todo}`);
// });

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log(`\nTodo by id ${todo}`);
}).catch((err) => {
    console.log();
    console.log(err.message);
})
