const app =require('../../index');
const mongoose = require('mongoose')
const chai= require('chai');
const { expect }= require ('chai');
const chaiHttp =require('chai-http');
const { describe, it } =require('mocha');
const fs = require('fs');
const { response } = require('../../index');
chai.should();
chai.use(chaiHttp);

describe('Testing Blog', () => {
  it('Testing Blog LoginASAdmin -> createBlog -> editBlog -> deleteBlog ......',(done) => {
      chai.request(app)
      .post(`/auth/login`)
      .send({ email: `admin@gmail.com`, password: "12" })
      .set('content-type', 'application/json')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        const ADMINTOKEN = res.body.data.token
        
          // add blog
          const filePath = __dirname + '/jimmy.jpg';
          chai.request(app).post('/blog')
          .field('title', 'new title')
          .field('contect', 'new body test')
          .attach('image',fs.readFileSync(filePath),'jimmy.jpg')
          // .set('token', ADMINTOKEN)
        //   .set('content-type', 'application/json')
          .set('token',ADMINTOKEN)
          .end((err,res)=>{
              res.should.have.status(201)
              const blog = res.body.data._id 

              //edit blog with blog as id
              chai.request(app)
              .put("/blog/" + blog)
              .set('token',ADMINTOKEN)
              .send({  title: "updated" })
              .end((err,res)=>{
                  res.should.have.status(200)
              })

              //get blog by id
              chai.request(app)
              .get("/blog/" + blog)
              .set('token',ADMINTOKEN)
              .end((err,response)=>{
                  response.should.have.status(200);
              })
              //deleting blog with blog as id
              chai.request(app)
              .delete("/blog/" + blog)
              .set('token',ADMINTOKEN)
              .end((err,res)=>{
                  res.should.have.status(200)
                  done()
              })

           })
      })
  })
})
describe("GET /blogs",()=>{
  it("List of all blogs",(done)=>{
      chai.request(app)
      .get("/blog")
      .end((err,response)=>{
          response.should.have.status(200);
          done()
      })
  })
});

describe('Testing view Blog', () => {
  it('Testing Contact LoginASAdmin -> viewContact......',(done) => {
      chai.request(app)
      .post(`/auth/login`)
      .send({ email: `admin@gmail.com`, password: "12" })
      .set('content-type', 'application/json')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        const ADMINTOKEN = res.body.data.token
        chai.request(app)
        .get("/contat")
        .set('token',ADMINTOKEN)
        .end((err,response)=>{
            response.should.have.status(200);
            done()
        })
      })
    })
  })

describe('/signup', () => {
  it('it should create a user -> login -> contact', (done) => {
    const number = Math.floor(Math.random() * 1000 * 10000000)
    chai.request(app)
      .post('/auth/signup/')
      .send({
        Fullname:`Saidi${number}`,
        age:'23',
        email:`Saidi${number}@mail.com`,
        password:'Mai1@23k'
      })
      .set('content-type', 'application/json')
      .end((err, res) => {
        // console.log(res)
        expect(res.statusCode).to.equal(200);
        expect(res.body.status).to.equal(200);
        expect(res.body.message)
        id = res.body.data.id

        chai.request(app)
        .post(`/auth/login`)
        .send({ email: `Saidi${number}@mail.com`, password: "Mai1@23k" })
        .set('content-type', 'application/json')
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          const USERTOKEN = res.body.data.token
        
          // Send message
          chai.request(app).post('/contat')
          .field('name', 'mirindi saidi')
          .field('email', 'mirindisaidi@gmail.com')
          .field('address', 'rubavu')
          .field('message', 'Keep Try')
          .set('token',USERTOKEN)
          .end((err,res)=>{
              res.should.have.status(201)
              done()
          })
        })
      }); 
  });
 });

 describe('/signup', () => {
  it('it should create a user update', (done) => {
    const number = Math.floor(Math.random() * 1000 * 10000000)
    chai.request(app)
      .post('/auth/signup/')
      .send({
        Fullname:`Saidi${number}`,
        age:'23',
        email:`Saidi${number}@mail.com`,
        password:'Mai1@23k'
      })
      .set('content-type', 'application/json')
      .end((err, res) => {
        // console.log(res)
        expect(res.statusCode).to.equal(200);
        expect(res.body.status).to.equal(200);
        expect(res.body.message)
        id = res.body.data.id
        const userupdate = res.body.data._id 
        chai.request(app)
        .put("/auth/" + userupdate)
        .send({  Fullname: "mirindi saidi",age: "34",email: "mirindisaidi19@gmail.com",password: "Kylexy@453" })
        .end((err,res)=>{
            res.should.have.status(200)
            done()
        })
      })
    })
  })
  describe('status', () => {
    it('cannot login due to wrong password ', (done) => {
      var wrongPassword = {
        email:`admin@gmail.com`,
        password:'Mai1@'
      };
      chai.request(app)
      .post('/auth/login').send(wrongPassword)
      .end((err, res) => {
        res.should.have.status(400);
        res.should.json
        done();
      });
    });
    it('cannot login due to wrong email ', (done) => {
      var wrongEmail = {
        email:`admingmail.com`,
        password:'12'
      };
      chai.request(app)
      .post('/auth/login').send(wrongEmail)
      .end((err, res) => {
        res.should.have.status(404);
        res.should.json
        done();
      });
    });
    it('cannot signup due to email exit ', (done) => {
      var user = {
        Fullname:"saidi",
        age:"20",
        email:"jimsaidi230@gmail.com",
        password:"Kylexy@98"
      };
      chai.request(app)
      .post('/auth/signup').send(user)
      .end((err, res) => {
        res.should.have.status(409);
        res.should.json
        done();
      });
    });
    it('Can not delete due blog in not exit ', (done) => {
      var user = {
        Fullname:"saidi",
        age:"20",
        email:"jimsaidi230@gmail.com",
        password:"Kylexy@98"
      };
      chai.request(app)
      .post('/auth/signup').send(user)
      .end((err, res) => {
        res.should.have.status(409);
        res.should.json
        done();
      });
    });
  })
