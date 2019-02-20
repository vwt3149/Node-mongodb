const expect =require ('expect');
const request =require ('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');


beforeEach((done) => {
    Todo.remove({}).then(() => done());
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
            console.log(res.body.text,'-------');
        })
        .end((err, res) => {
            if(err){
                return done(err);
            }

            Todo.find().then((result) => {
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
                expect(result.length).toBe(0);
                done();
            }).catch((err) => {
                return done(err)
            });
        });
    });// End it
});// End describe