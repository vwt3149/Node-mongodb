
const {MongoClient, ObjectID}= require('mongodb');
//C:\Program Files\MongoDB\Server\4.0\bin>mongod.exe --dbpath \Users\adrij\mongo-data

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
    if (err) {
        console.log('Unable to connect to Mongo db server');
    }else{
        console.log('Connected to Mongo db server');  
    }
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c6a70e12ee69cbd2b62ddaa')
    // }).toArray().then((docs) => {
    //     console.log('-----------------');
    //     console.log(JSON.stringify(docs, undefined, 2));
    //     console.log('-----------------');
    // },(err) => {
    //     console.log('Unable to connect to todos', err);
    // }).catch((err) =>{
    //     console.log('somethin went wrong',err);
    // })

      db.collection('Todos').find().toArray().then((result) => {
          console.log('------------',result);
      }).catch((err) => {
          console.log('---------',err);
      }); 

    client.close(); 
});


















