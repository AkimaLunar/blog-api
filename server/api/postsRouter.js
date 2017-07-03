const express       = require('express');

const postsRouter   = express.Router();
const mongoose      = require('mongoose');
mongoose.Promise    = global.Promise;
const { Post }      = require('../models/post');

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
                    return post.apiRepr()
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
            res.status(200).json(post.apiRepr());
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
                logger.error(chalk.red(`Post with ID ${req.params.id} doesn't exist.`));
                return res.status(404).json({message: 'Post not found'});
            }
            res.status(200).json(
                posts.map(
                    (post) => post.apiRepr()
                )
            );
            logger.info(chalk.blue(`Retrieved blog post with ID ${post._id}`));
        })
        .catch(
            err => {
                logger.error(chalk.red(err));
                res.status(500).json({message: 'Internal server error'});
            }
        )
});


module.exports = { postsRouter };