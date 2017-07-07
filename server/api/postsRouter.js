const express       = require('express');

const postsRouter   = express.Router();
const mongoose      = require('mongoose');
mongoose.Promise    = global.Promise;
const { Post }      = require('../models/post');
const { User }      = require('../models/user');

const bodyParser    = require('body-parser');

// Auth0
const { authCheck } = require('../authentication');

const { logger }    = require('../logger');
const chalk         = require('chalk');

postsRouter.use(bodyParser.json());

// GET ALL
postsRouter.get('/', (req, res) => {
    Post
        .find()
        .exec()
        .then(posts => {
            if (!posts){
                logger.error(chalk.red(`No posts found.`));
                return res.status(404).json({message: 'No posts found.'});
            }
            res.status(200).json(
                posts.map(post => {
                    // Post.postTypeFactory(post);
                    logger.info(chalk.blue(`${post.type}`));
                    return post.postRepr();
                })
            );
            logger.info(chalk.blue(`Retrieved posts.`));
        })
        .catch(
            err => {
                logger.error(chalk.red(err));
                res.status(500).json({message: 'Internal server error'});
            }
        )
});

// GET BY ID
postsRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    Post
        .findOne({'_id': id})
        .exec()
        .then(post => {
            if (!post){
                logger.error(chalk.red(`Post with ID ${req.params.id} doesn't exist.`));
                return res.status(404).json({message: 'Post not found'});
            }
            res.status(200).json(post.postRepr());
            logger.info(chalk.blue(`Retrieved blog post with ID ${post._id}`));
        })
        .catch(
            err => {
                logger.error(chalk.red(err));
                res.status(500).json({message: 'Internal server error'});
            }
        )
});

// GET BY USER ID

postsRouter.get('/user/:id', (req, res) => {
    const id = req.params.id;
    Post
        .find({'author.userId': id})
        .exec()
        .then(posts => {
            if (!posts){
                logger.error(chalk.red(`No posts not found`));
                return res.status(404).json({message: 'No posts not found'});
            }
            res.status(200).json(
                posts.map(
                    (post) => post.postRepr()
                )
            );
            logger.info(chalk.blue(`Retrieved blog posts for the user with ID ${id}`));
        })
        .catch(
            err => {
                logger.error(chalk.red(err));
                res.status(500).json({message: 'Internal server error'});
            }
        )
});

postsRouter.post('/', authCheck, (req, res) => {
    const allowedTypes = [
        'blog',
        'photo'
    ];
    const requiredFields = [
        'title',
        'type',
        'author',
        'tags',
        'hearts',
        'content'
    ];
    for (let i=0; i<requiredFields.length; i++) {
        const field = requiredFields[i];
        if (!(field in req.body)) {
            const message = `Missing \`${field}\` in request body`
            console.error(message);
            return res.status(400).send(message);
        }
    }

    if (req.body.type !== "photo") {
        const message = `Incorrect post type \`${req.body.type}\``
        console.error(message);
        return res.status(400).send(message);
    }
    User
        .findOne({'auth0_id':req.body.author.userId})
        .exec()
        .then(user => {
            if (!user) {
                logger.error(chalk.red(`User doesn't excist`));
                res.status(500).json({message: 'Internal server error'});
            }
            
            user.authorRepr()
        })
        .then(author => {
            return Post
            .create({
                title: req.body.title,
                type: req.body.type,
                author: author,
                timestamp: new Date,
                tags: req.body.tags,
                hearts:req.body.hearts,
                content: JSON.stringify(req.body.content)
            })
        })
        .then(post => {
            logger.info(chalk.blue(`Created a post with id ${post._id}`));
            res.status(200).json(post.postRepr())
        })
        .catch(
            err => {
                logger.error(chalk.red(err));
                res.status(500).json({message: 'Internal server error'});
            }
        )
});

module.exports = { postsRouter };