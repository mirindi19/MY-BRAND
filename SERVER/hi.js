describe('Testing Blog', () => {
    it('Testing Blog LoginASAdmin -> createBlog -> editBlog -> deleteBlog ......',(done) => {
        chai.request(app)
        .post(`/auth/login`)
        .send({ email: `admin@gmail.com`, password: "12" })
        .set('content-type', 'application/json')
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          const ADMINTOKEN = res.body.token
          
            // add blog
            const filePath = __dirname + '/jimmy.jpg';
            chai.request(app).post('/blog')
            .set('cookie',`jwt=${ADMINTOKEN}`)
            .field('title', 'new title')
            .field('contect', 'new body test')
            .attach('image',fs.readFileSync(filePath),'jimmy.jpg')
            .end((err,res)=>{
                res.should.have.status(201)
                const blog = res.body.data._id

                //edit blog with blog as id
                chai.request(app)
                .put("/blog/" + blog)
                .set('cookie',`jwt=${ADMINTOKEN}`)
                .send({  title: "updated" })
                .end((err,res)=>{
                    res.should.have.status(200)
                })
                //deleting blog with blog as id
                chai.request(app)
                .delete("/blog/" + blog)
                .set('cookie',`jwt=${ADMINTOKEN}`)
                .end((err,res)=>{
                    res.should.have.status(200)
                    done()
                })

             })
        })
    })
})