const express = require('express');
const { PORT } = require('./config.js');
const { logger } = require('./logger');
const { router } = require('./router');
require('./BLOGPOSTS.js');

const app = express();

app.use('/blog-posts', router);

let server;
const runServer = function(port=PORT){
    return new Promise((resolve, reject) => {
        server = app.listen(port, () => {
            logger.info(`Your app is listening on port ${port}`);
            resolve();
        })
        .on('error', err => {
            reject(err);
        })
    })
}

const closeServer = function(){
    return new Promise((resolve, reject) => {
        server.close(err => {
            if(!err) {
                logger.info('Shutting down server')
                resolve();
            } else {
                reject(err);
                logger.error(err);
            }
        })
    })
}

if (require.main === module) {
    runServer()
        .catch(err => console.log(err));
}

module.exports = { app, runServer, closeServer };