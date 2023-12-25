/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const authMiddleware = require('./src/middleware/authMiddleware');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(authMiddleware);

const root = require('./src/routers/root');

app.use('/', root);

module.exports = app;
