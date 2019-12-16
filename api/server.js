const express = require('express');
const configureMiddleware = require('./configure-middleware.js');

const server = express();

configureMiddleware(server);

const server = require('express').Router();

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
    res.json({ api: "It's alive" });
});

module.exports = server;