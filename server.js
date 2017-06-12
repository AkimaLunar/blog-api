const path = require('path');
const express = require('express');
const { router } = require('./router');
const mongoose = require('mongoose');
const { PORT, DATABASE_URL } = require('./config.js');

const { logger } = require('./logger');
const chalk = require('chalk');

const app = express();

app.use(express.static('public'))
app.use('/api', router);
// app.use('/api/blog', blogRouter);
// app.use('/api/users', userRouter);

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

let server;
const runServer = function(databaseUrl=DATABASE_URL, port=PORT){
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