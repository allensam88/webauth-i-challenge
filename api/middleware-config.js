const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

const sessionConfig = {
    name: 'monkey',
    secret: 'keep it secret, keep it safe!',
    cookie: {
        maxAge: 1000 * 30,
        secure: false, // dynamically change to true in production environment
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: false, // GDPR laws against setting cookies automatically
};

module.exports = server => {
  server.use(helmet());
  server.use(express.json());
  server.use(cors());
  server.use(session(sessionConfig));
};