// const MongoClient= require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');

// var obj= new ObjectID();
// console.log('-------------------');
// console.log(obj);
// console.log('-------------------');

// Object destructuring es6 way
// var user={
//     name:'sklj',
//     age:22
// }                   

// var {name}=user;
// console.log('--------------------------');
// console.log(name);
// Object destructuring es6 way

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
    if (err) {
        console.log('Unable to connect to Mongo db server');
    }else{
        console.log('Connected to Mongo db server');  
    }
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         console.log('Unable to insert todo',err);
    //     }else{
    //         console.log(JSON.stringify(result.ops, undefined, 2));
    //     }
    // });

    // db.collection('Users').insertOne({
    //     name:'sklj',
    //     age: 22,
    //     location: {
    //         lat:3246732647,
    //         lng:7438342444
    //     }
    // }, (err, result) => {
    //     if (err) {
    //         console.log('Unable to connect to todos', err);
    //     }else{
    //         console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    //     }
    // });

    client.close();
});