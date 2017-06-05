const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const { BlogPost } = require('./models');

const bodyParser = require('body-parser');

const { logger } = require('./logger');
const chalk = require('chalk');

router.use(bodyParser.json());


// GET ALL
router.get('/', (req, res) => {
    BlogPost
        .find()
        .limit(25)
        .exec()
        .then(blogposts => {
            logger.info(chalk.blue(`Retrieved blog posts`));
            res.status(200).json(
                blogposts.map(
                    (blogpost) => blogpost.apiRepr()
                )
            );
        })
        .catch(
            err => {
                logger.error(chalk.red(err));
                res.status(500).json({message: 'Internal server error'});
            }
        )
});

// GET BY ID
router.get('/:id', (req, res) => {
    const id = req.params.id;
    BlogPost
        .findOne({'_id': id})
        .exec()
        .then(post => {
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

// CREATE
router.post('/', (req, res) => {

    const requiredFields = ['title', 'content', 'author'];
    for (let i=0; i<requiredFields.length; i++) {
        const field = requiredFields[i];
        if (!(field in req.body)) {
            const message = `Missing ${field} in request body`;
            logger.error(chalk.red(message));
            return res.status(400).send(message);
        }
    }
    BlogPost
        .create({
            title : req.body.title,
            content : req.body.content,
            author : req.body.author,
            timestamp: new Date
        })
        .then(post => {
            logger.info(chalk.blue(`Created a new post with ID ${post._id}`));
            res.status(201).json(post.apiRepr())
        })
        .catch(err => {
            logger.error(chalk.red(err));
            res.status(500).json({message: 'Internal server error'})
        })
})

// UPDATE
router.put('/:id', (req, res) => {

    if (!(req.params.id && req.body.id && req.params.id === req.body.id)) {
        const message = `The ID in URL (${req.params.id}) and body (${req.body.id}) must match`;
        logger.error(chalk.red(message));
        return res.status(400).send(message);
    };
    let toUpdate = {}
    const updatableFields = ['title', 'content', 'author'];

    updatableFields.forEach(field => {
        if (field in req.body) {
            toUpdate[field] = req.body[field];
        }
    })

    
    BlogPost
        .findByIdAndUpdate(
            req.params.id,
            { $set: toUpdate }
        )
        .exec()
        .then(post => {
            logger.info(chalk.blue(`Updated post with ID ${post._id}`));
            res.status(201).json(post.apiRepr())
        })
        .catch(err => {
            logger.error(chalk.red(err));
            res.status(500).json({message: 'Internal server error'})
        });
});

// DELETE
router.delete('/:id', (req, res) => {
    BlogPost
        .findByIdAndRemove(req.params.id)
        .exec()
        .then(post => {
            logger.info(chalk.blue(`Deleted a post with ID ${req.params.id}`));
            res.status(204).end();
        })
        .catch(err => {
            logger.error(chalk.red(err));
            res.status(500).json({message: 'Internal server error'})
        });
});

module.exports = { router };