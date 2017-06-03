const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

const { app, runServer, closeServer } = require('../server.js');

describe('Blog', function(){
    before(function(){
        return runServer(8081);
    })
    after(function(){
        return closeServer()
    })

    it('should retrieve blog posts on GET', function(){
        return chai.request(app)
            .get('/blog-posts')
            .then(function(res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body.forEach(function(post) {
                    post.should.be.a('object');
                    post.should.have.all.keys(
                        "id",
                        "title",
                        "content",
                        "author",
                        "publishDate"
                    );
                });
            });
    });

    it('should retrieve a correct blog post with an ID on GET', function(){
        let postId;

        return chai.request(app)
            .get('/blog-posts')
            .then(function(res){
                postId = res.body[0].id;
                return chai.request(app)
                    .get(`/blog-posts/${postId}`)
            })

            .then(function(res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.include.keys(
                    "id",
                    "title",
                    "content",
                    "author",
                    "publishDate"
                );
                res.body.id.should.equal(postId);
            });
    });

    it('should create a new blog post on POST', function(){
        const newBlogPost = {
            "title":    "New Post",
            "content":  "Bloblablabla",
            "author":   "Ria Carmin",
        };
        return chai.request(app)
            .post('/blog-posts')
            .send(newBlogPost)
            .then(function(res){
                res.should.have.status(201);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.include.keys(
                    "id",
                    "title",
                    "content",
                    "author",
                    "publishDate"
                );
                res.body.should.deep.equal(Object.assign(newBlogPost, {
                    "id": res.body.id,
                    "publishDate": res.body.publishDate
                }));
            })
    })

    it('should update a blog post with ID on PUT', function(){
        const updatedBlogPost = {
            "title":    "Updated Post",
            "content":  "Bloblablabla 2",
            "author":   "Ria Carmin",
        };
        return chai.request(app)
            .get('/blog-posts')
            .then(function(res){
                updatedBlogPost.id = res.body[0].id;
                return chai.request(app)
                    .put(`/blog-posts/${res.body[0].id}`)
                    .send(updatedBlogPost);
            })

            .then(function(res){
                res.should.have.status(201);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.include.keys(
                    "id",
                    "title",
                    "content",
                    "author",
                    "publishDate"
                );
                res.body.should.deep.equal(Object.assign(updatedBlogPost, {
                    "publishDate": res.body.publishDate
                }));
            });
    });

    it('should delete a blog post with ID on DELETE', function(){
        return chai.request(app)
            .get('/blog-posts')
            .then(function(res) {
                return chai.request(app)
                .delete(`/blog-posts/${res.body[0].id}`);
            })
            .then(function(res) {
                res.should.have.status(204);
            });
    });
});