const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const root = require('./src/routers/root');

app.use('/', root);

module.exports = app;
