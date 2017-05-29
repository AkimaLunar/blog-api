const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const { logger } = require('./logger');
const chalk = require('chalk');

const { BlogPosts } = require('./models');

// GET
router.get('/', jsonParser, (req, res) => {
    const requestedPosts = BlogPosts.get();
    requestedPosts
        .then(posts => {
            res.status(200).json(posts);
            logger.info(chalk.blue(`Retrieved blog posts`));
        })
})

router.get('/:id', jsonParser, (req, res) => {
    const requestedPost = BlogPosts.get(req.params.id);
    requestedPost
        .then(post => {
            res.status(200).json(post);
            logger.info(chalk.blue(`Retrieved blog post with ID ${req.params.id}`));
        })
        .catch(e => {
            res.status(404).send(e);
            logger.error(chalk.red(e));
        })
})

// CREATE
router.post('/', jsonParser, (req, res) => {
    // Author optional??
    const requiredFields = ['title', 'content', 'author'];
    for (let i=0; i<requiredFields.length; i++) {
        const field = requiredFields[i];
        if (!(field in req.body)) {
            const message = `Missing ${field} in request body`;
            logger.error(chalk.red(message));
            return res.status(400).send(message);
        }
    }
    // Date optional??
    const post = BlogPosts.create(req.body.title, req.body.content, req.body.author);
    logger.info(chalk.blue(`Created a new post with ID ${post.id}`));
    res.status(201).json(post);
})

// UPDATE
router.put('/:id', jsonParser, (req, res) => {
    const postId = req.params.id;
    const updatedPost = req.body;

    if (postId !== updatedPost.id) {
        const message = `The ID in URL (${postId}) and body (${updatedPost.id}) must match`;
        logger.error(chalk.red(message));
        return res.status(400).send(message);
    };

    const requiredFields = ['title', 'content', 'author'];

    for (i=0; i<requiredFields.length; i++){
        const field = requiredFields[i];
        if(!(field in updatedPost)) {
            const message = `Missing ${field} in request body`;
            logger.error(chalk.red(message));
            res.status(400).send(message);
        }
    }

    try {
        BlogPosts.update(updatedPost);
        logger.info(chalk.blue(`Updated a post with ID ${updatedPost.id}`));
        res.status(201).send(updatedPost);
    } catch(e) {
        logger.error(chalk.red(e));
        res.status(400).send(e);
    }
})

// DELETE
router.delete('/:id', jsonParser, (req, res) => {
    BlogPosts.delete(req.params.id);
    logger.info(chalk.blue(`Deleted a post with ID ${req.params.id}`));
    res.status(204).end();

})

module.exports = { router };