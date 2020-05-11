const http = require('http');
const express = require('express');
const app = express();

const publicRouter = require('./routes/public');
const privateRouter = require('./routes/private');

app.use('/', publicRouter);
app.use('/p', privateRouter);

app.listen(3000, '127.0.0.1', () => {
    console.log('Server is running on socker 127.0.0.1:3000');
});