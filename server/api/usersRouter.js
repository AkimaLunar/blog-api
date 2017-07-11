const express       = require('express');

const usersRouter   = express.Router();
const mongoose      = require('mongoose');
mongoose.Promise    = global.Promise;
const { User }      = require('../models/user');

const bodyParser    = require('body-parser');

// Auth0
const { authCheck } = require('../authentication');

const { logger }    = require('../logger');
const chalk         = require('chalk');

usersRouter.use(bodyParser.json());

// GET ALL
usersRouter.get('/', (req, res) => {
    User
        .find()
        .exec()
        .then(users => {
            if (!users){
                logger.error(chalk.red(`No users found`));
                return res.status(404).json({message: 'No users found'});
            }
            res.status(200).json(
                users.map(user => {
                    return user.apiRepr()
                })
            );
            logger.info(chalk.blue(`Retrieved users.`));
        })
        .catch(
            err => {
                logger.error(chalk.red(err));
                res.status(500).json({message: 'Internal server error'});
            }
        )
});

// GET BY ID
usersRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    User
        .findOne({'auth0_id': id})
        .exec()
        .then(user => {
            if (!user){
                logger.error(chalk.red(`User with ID ${req.params.id} doesn't exist.`));
                return res.status(404).json({message: 'User not found'});
            }
            res.status(200).json(user.apiRepr());
            logger.info(chalk.blue(`Retrieved user with ID ${user.auth0_id}`));
        })
        .catch(
            err => {
                logger.error(chalk.red(err));
                res.status(500).json({message: 'Internal server error'});
            }
        )
});

// CREATE A USER

usersRouter.post('/', authCheck, (req, res) => {
    const requiredFields = [
        'auth0_id',
        'email'
    ]

    for (let i=0; i<requiredFields.length; i++) {
        const field = requiredFields[i];
        if (!(field in req.body)) {
            const message = `Missing \`${field}\` in request body`
            console.error(message);
            return res.status(400).send(message);
        }
    }

    User
        .findOne({'auth0_id': req.body.auth0_id})
        .exec()
        .then(user => {
            if (user) {
                logger.info(chalk.blue(`User with an ID ${user.auth0_id} already exists.`))
                return res.status(200).end();
            }
            return;
        })
        .then(() => {
            return User
                .create(req.body)
                .then(user => {
                    logger.info(chalk.blue(`Created a user with ID ${user.auth0_id}`))
                    return res.status(201).send(user.apiRepr());
                })
        })
        .catch(err => {
            logger.error(chalk.red(err));
            res.status(500).json({message: 'Internal server error'});
        })
})

module.exports = { usersRouter };
