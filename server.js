const express = require('express');

const { logger } = require('./logger');
const { router } = require('./router');

const app = express();

app.use('/blog-posts', router);

app.listen(process.env.PORT || 8080, () => {
    logger.info(`Your app is listening on port ${process.env.PORT || 8080}`);
})