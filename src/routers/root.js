const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('<h1>Estrutura base para API  ( NodeJS )</h1>');
});

router.get('/sobre', (req, res) => {
  res.status(200).send(' { "version": "1.0.0", "name": "API - Estrutura base ( NodeJS )", "Description": "Estrutura Base para desenvolvimento de API ( NodeJS )"  } ');
});

module.exports = router;
