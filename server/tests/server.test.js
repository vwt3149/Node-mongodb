const expect =require ('expect');
const request =require ('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todosArr = [{
    text:'text 1--'
},{
    text:'text 2--'
}]

beforeEach((done) => {
    Todo.remove({}).then(() => {
      return  Todo.insertMany(todosArr);
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
    })
})