const express = require('express');
const dotenv = require('dotenv');
const { dbConnection } = require('./db/config');
dotenv.config();

const app = express();
dbConnection();

app.use(express.static('public'));
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/comments', require('./routes/comments'));

module.exports = app;
