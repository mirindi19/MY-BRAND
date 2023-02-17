// const app =require('../../index');
// const mongoose = require('mongoose')
// const chai= require('chai');
// const { expect }= require ('chai');
// const chaiHttp =require('chai-http');
// const { describe, it } =require('mocha');
// chai.should();
// chai.use(chaiHttp);

//  describe('/signup', () => {
//   it('it should create a user', (done) => {
//     const number = Math.floor(Math.random() * 1000 * 10000000)
//     chai.request(app)
//       .post('/auth/signup/')
//       .send({
//         Fullname:`Saidi${number}`,
//         age:'23',
//         email:`Saidi${number}@mail.com`,
//         password:'Mai1@23k'
//       })
//       .set('content-type', 'application/json')
//       .end((err, res) => {
//         // console.log(res)
//         expect(res.statusCode).to.equal(200);
//         expect(res.body.status).to.equal(200);
//         expect(res.body.message)
//         id = res.body.data.id

//         chai.request(app)
//         .post(`/auth/login`)
//         .send({ email: `Saidi${number}@mail.com`, password: "Mai1@23k" })
//         .set('content-type', 'application/json')
//         .end((err, res) => {
//           expect(res.statusCode).to.equal(200);
//         })

//         done();
//       });
//   });
//  });
