
const {MongoClient, ObjectID}= require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
    if (err) {
        console.log('Unable to connect to Mongo db server');
    }else{
        console.log('Connected to Mongo db server');  
    }
    const db = client.db('TodoApp');

//    db.collection('Todos').deleteMany({text:'Something to do'}).then((result) => {
//        console.log(result,'-------------');
//    }).catch((err) => {
//     console.log(err,'-------------');
//    });


//    db.collection('Todos').deleteOne({text:'radi 100%'}).then((result) => {
//        console.log(result,'-------------');
//    }).catch((err) => {
//     console.log(err,'-------------');
//    });


db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
    console.log(result,'-------------');
}).catch((err) => {
 console.log(err,'-------------');
});


    client.close(); 
});


















