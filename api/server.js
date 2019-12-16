const express = require('express');
const configureMiddleware = require('./middleware-config.js');

const server = express();

configureMiddleware(server);

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

server.use('/api', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
    res.json({ api: "It's alive" });
});

module.exports = server;