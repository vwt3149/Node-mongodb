
const {MongoClient, ObjectID}= require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
    if (err) {
        console.log('Unable to connect to Mongo db server');
    }else{
        console.log('Connected to Mongo db server');  
    }
    const db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c6a6a4c679bd047243e9b49')
    },{
        $set:{
            name: 'adi',
            age:43
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(JSON.stringify(result,undefined,3));
    }).catch((err) => {
        console.log(err);
    });

    client.close(); 
});


















