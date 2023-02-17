



// describe("POST /blogs/add",()=>{
//     it("should send a blog",(done)=>{
//     const filePath = __dirname + '/1.jpg'; // path to the file you want to upload
//         chai.request(server)
//         .post("/add")
//         .set('cookie',`jwt=${process.env.ADMIN_TOKEN}`)
//         .field('title', 'new title')
//         .field('body', 'new body test')
//         .attach('image',fs.readFileSync(filePath),'1.jpg')
//         .end((err,res)=>{
//             res.should.have.status(201)
//              blog= res.body.data._id
//             done()
//         })
//     })
// })