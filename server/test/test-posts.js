const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

const mongoose = require('mongoose');
const TEST_DATABASE_URL = 'mongodb://blueOperator:BombasticJewel!@ds145148.mlab.com:45148/rias-test-blog-api';

const { Post } = require('../models/post.js')
const { app, runServer, closeServer } = require('../server.js');

// SEEDING DATA
function seedPostData(){
    console.info('Seeding data');
    const seedData = [];

    for(let i=0; i<10; i++){
        seedData.push(generatePost());
    }

    return Post.insertMany(seedData);
}

function generatePost(){
    return {
        title : "Hello" + Math.round(Math.random() * 100),
        content : "Stringified JSON",
        type : "blog",
        author : {
            userId : "dhbvlaksbdvlka",
            displayName : "Smuck McShmufferson"
        },
        timestamp: new Date()
    }
}

function tearDownDb(){
    console.warn('Deleting database');
    return mongoose.connection.dropDatabase();
}


// TESTS

describe('Posts API', function(){
    before(function(){
        // return runServer(TEST_DATABASE_URL, 8181);
        return runServer('mongodb://blueOperator:BombasticJewel!@ds145148.mlab.com:45148/rias-test-blog-api', 8181);
    })

    beforeEach(function(){
        return seedPostData();
    })

    afterEach(function(){
        return tearDownDb();
    })

    after(function(){
        return closeServer()
    })

    describe('GET endpoint', function(){
        it('should retrieve all posts on GET', function(){
            let res;
            return chai.request(app)
                .get('/api/posts')
                .then(function(_res){
                    res = _res;
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('array');
                    res.body.forEach(function(post) {
                        post.should.be.a('object');
                        post.should.have.all.keys(
                            "_id",
                            "title",
                            "type",
                            "content",
                            "author",
                            "timestamp"
                        );
                    });
                    return Post.count();
                })
                .then(function(count){
                    console.log(count + " " +  res.body.length)
                    // res.body.should.have.length.of(count);
                    // res.body.should.have.length.of(10);
                })
        });

        it('should retrieve a correct post with an ID on GET', function(){
            let postId;

            return chai.request(app)
                .get('/api/posts')
                .then(function(res){
                    postId = res.body[0].id;
                    return chai.request(app)
                        .get(`/api/posts/${postId}`)
                })

                .then(function(res){
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.should.include.keys(
                        "id",
                        "title",
                        "type",
                        "content",
                        "author",
                        "timestamp"
                    );
                    res.body.id.should.equal(postId);
                });
        });
    })

    describe('POST endpoint', function(){
        it('should create a new post on POST', function(){
            const newPost = {
                title:    "New Post",
                content:  "Bloblablablo",
                type:     "blog",
                author : {
                    userId : "dhbvlaksbdvlka",
                    displayName : "Smuck McShmufferson"
                },
            };
            return chai.request(app)
                .post('/api/posts')
                .send(newPost)
                .then(function(res){
                    res.should.have.status(201);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.should.include.keys(
                        "id",
                        "title",
                        "type",
                        "content",
                        "author",
                        "timestamp"
                    );
                    res.body.should.deep.equal(Object.assign(newPost, {
                        "id": res.body.id,
                        "timestamp": res.body.timestamp
                    }));
                })
        })
    })

    describe('PUT endpoint', function(){
        it('should update a post with ID on PUT', function(){
            const updatedPost = {
                title:    "Updated Post",
                content:  "Bloblablabla 2",
                type:     "blog",
                author : {
                    userId : "dhbvlaksbdvlka",
                    displayName : "Smuck McShmufferson"
                },
            };
            return chai.request(app)
                .get('/apiposts/')
                .then(function(res){
                    updatedPost.id = res.body[0].id;
                    return chai.request(app)
                        .put(`/api/posts/${res.body[0].id}`)
                        .send(updatedPost);
                })

                .then(function(res){
                    res.should.have.status(201);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.should.include.keys(
                        "id",
                        "title",
                        "type",
                        "content",
                        "author",
                        "timestamp"
                    );
                    res.body.should.deep.equal(Object.assign(updatedPost, {
                        "timestamp": res.body.timestamp
                    }));
                });
        });
    })
    describe('DELETE endpoint', function(){
        it('should delete a blog post with ID on DELETE', function(){
            return chai.request(app)
                .get('/api/posts')
                .then(function(res) {
                    return chai.request(app)
                    .delete(`/api/posts/${res.body[0].id}`);
                })
                .then(function(res) {
                    res.should.have.status(204);
                });
        });
    })
});