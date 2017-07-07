require('dotenv').config()

const path            = require('path');
const express         = require('express');
const { postsRouter } = require('./api/postsRouter');
const { usersRouter } = require('./api/usersRouter');
const mongoose        = require('mongoose');

const { logger }      = require('./logger');
const chalk           = require('chalk');
const cors            = require('cors');
const app             = express();

app.use(cors())

app.use('/api/posts', postsRouter);
app.use('/api/users', usersRouter);
app.get('*', function(req, res){
    return res.status(200).json({message: 'Meenk API'});
})
let server;
const runServer = function(databaseUrl=process.env.DATABASE_URL, port=process.env.PORT){
    return new Promise((resolve, reject) => {
        mongoose.connect(databaseUrl, err => {
            if (err) {
                logger.error(chalk.red('Couldn’t connect to the database. Shutting down.' + err))
                return reject(err)
            }
            server = app.listen(port, () => {
                logger.info(chalk.green(`Your app is listening on port ${port}`));
                resolve();
            })
            .on('error', err => {
                mongoose.disconnect();
                logger.error(chalk.red('Couldn’t start the server.' + err))
                reject(err);
            });
        });
    });
}

const closeServer = function(){
    return mongoose.disconnect().then(() => {
        return new Promise((resolve, reject) => {
            server.close(err => {
                if(!err) {
                    logger.info(chalk.green('Shutting down server. Bye!'))
                    resolve();
                } else {
                    reject(err);
                    logger.error(chalk.red(err));
                }
            });
        });
    })
}

if (require.main === module) {
    runServer()
        .catch(err => console.log(err));
}

module.exports = { app, runServer, closeServer };