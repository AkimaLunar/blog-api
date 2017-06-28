const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

// const faker = require('faker');

const mongoose = require('mongoose');

const { BlogPost } = require('../models.js')
const { app, runServer, closeServer } = require('../server.js');
const { TEST_DATABASE_URL } = require('../config.js');

// DATA

function seedBlogPostData(){
    console.info('Seeding data');
    const seedData = [];

    for(let i=0; i<10; i++){
        seedData.push(generateBlogPost());
    }

    return BlogPost.insertMany(seedData);
}

function generateBlogPost(){
    return {
        title : "Hello" + Math.round(Math.random() * 100),
        content : "Blabla",
        author : {
            firstName : "Dick",
            lastName : "McShmufferson"
        },
        timestamp: new Date()
    }
}

function tearDownDb(){
    console.warn('Deleting database');
    return mongoose.connection.dropDatabase();
}


// TESTS

describe('Blog API', function(){
    before(function(){
        return runServer(TEST_DATABASE_URL, 8181);
    })

    beforeEach(function(){
        return seedBlogPostData();
    })

    afterEach(function(){
        return tearDownDb();
    })

    after(function(){
        return closeServer()
    })

    describe('GET endpoint', function(){
        it('should retrieve all blog posts on GET', function(){
            let res;
            return chai.request(app)
                .get('/api')
                .then(function(_res){
                    res = _res;
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
                            "timestamp"
                        );
                    });
                    return BlogPost.count();
                })
                .then(function(count){
                    console.log(count + " " +  res.body.length)
                    // res.body.should.have.length.of(count);
                    // res.body.should.have.length.of(10);
                })
        });

        it('should retrieve a correct blog post with an ID on GET', function(){
            let postId;

            return chai.request(app)
                .get('/api')
                .then(function(res){
                    postId = res.body[0].id;
                    return chai.request(app)
                        .get(`/api/${postId}`)
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
                        "timestamp"
                    );
                    res.body.id.should.equal(postId);
                });
        });
    })

    describe('POST endpoint', function(){
        it('should create a new blog post on POST', function(){
            const newBlogPost = {
                title:    "New Post",
                content:  "Bloblablablo",
                author:   {
                    firstName: "Ria",
                    lastName: "Carmin"
                },
            };
            return chai.request(app)
                .post('/api')
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
                        "timestamp"
                    );
                    res.body.should.deep.equal(Object.assign(newBlogPost, {
                        "id": res.body.id,
                        "author": newBlogPost.author.firstName + " " + newBlogPost.author.lastName,
                        "timestamp": res.body.timestamp
                    }));
                })
        })
    })

    describe('PUT endpoint', function(){
        it('should update a blog post with ID on PUT', function(){
            const updatedBlogPost = {
                title:    "Updated Post",
                content:  "Bloblablabla 2",
                author:   {
                    firstName: "Ria",
                    lastName: "Carmin"
                },
            };
            return chai.request(app)
                .get('/api')
                .then(function(res){
                    updatedBlogPost.id = res.body[0].id;
                    return chai.request(app)
                        .put(`/api/${res.body[0].id}`)
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
                        "timestamp"
                    );
                    res.body.should.deep.equal(Object.assign(updatedBlogPost, {
                        "author": updatedBlogPost.author.firstName + " " + updatedBlogPost.author.lastName,
                        "timestamp": res.body.timestamp
                    }));
                });
        });
    })
    describe('DELETE endpoint', function(){
        it('should delete a blog post with ID on DELETE', function(){
            return chai.request(app)
                .get('/api')
                .then(function(res) {
                    return chai.request(app)
                    .delete(`/api/${res.body[0].id}`);
                })
                .then(function(res) {
                    res.should.have.status(204);
                });
        });
    })
});