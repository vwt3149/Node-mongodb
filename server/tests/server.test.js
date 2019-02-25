const expect =require ('expect');
const request =require ('supertest');
const {ObjectID} =  require('mongodb')

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
    _id: new ObjectID(),
    text:'text 1--'
},{
    _id: new ObjectID(),
    text:'text 2--'
}]

beforeEach((done) => {
    Todo.remove({}).then(() => {
      return  Todo.insertMany(todos);
    }).then(() => done())
})

describe('POST /todos', () => {
    it('shoud create new todo', (done) => {
        var text = 'radi';

        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res) =>{
            expect(res.body.text).toBe(text);
        })
        .end((err, res) => {
            if(err){
                return done(err);
            }

            Todo.find({text}).then((result) => {
                expect(result.length).toBe(1);
                expect(result[0].text).toBe(text);
                done();
            }).catch((err) => {
                return done(err)
            });
        });
    });// End it

    it('Shoud not createo todo with invalid data',(done) => {

        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, res) => {
            if(err){
                return done(err);
            }

            Todo.find().then((result) => {
                expect(result.length).toBe(2);
                done();
            }).catch((err) => {
                return done(err)
            });
        });
    });// End it
});// End describe

 

describe('Get /todos', () => {
    it('shoud get all todos', (done) => {
        request(app)
        .get('/todos')
        .expect(200)
        .expect((res) => {
            expect(res.body.result.length).toBe(2)
        })
        .end(done); // err handeler is not needed, because ther is nothing asinhrons
    });// End it
});// End describe

describe('GET/todos/:id', () => {
    it('Shoud return todo dock', (done) => {
        request(app)
        .get(`/todos/${todos[0]._id.toHexString()}`)
        .expect(200)
        .expect((res) => {
            expect(res.body.todo.text).toBe(todos[0].text);
            
        })
        .end(done);
    });// End it

    it('shoud return 404 if todo not found', (done) => {
        // var di ={
        //     _id:new ObjectID().toHexString()
        // }
        var di = new ObjectID().toHexString()
        request(app)
        .get(`/todos/${di}`)
        .expect(404)
        .end(done)
        console.log(`=====${di._id}=====`);
    })// End it

    it('Shoud return for non object ids', (done) => {
        request(app)
        .get(`/todos/1221`)
        .expect(404)
        .end(done);
    });// End it
});// End describe























