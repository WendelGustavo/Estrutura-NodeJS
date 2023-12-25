const jwt = require('jsonwebtoken');
require('dotenv').config();

const checktoken = async (token, id) => jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
  if (err) {
    return { auth: false, message: 'Token invalido.' };
  }
  const idnum = Number(id);
  if (decoded.id !== idnum) {
    return { auth: false, message: 'Token invalido, ID do usuário não correspondente.' };
  }
  return { auth: true, message: 'Token valido.' };
});

const setToken = async (id) => {
  if (id > 0) {
    return jwt.sign({ id }, process.env.TOKEN_KEY, { expiresIn: 51840000 });
  }
  return { auth: false, message: 'ID inválido.' };
};

module.exports = {
  checktoken,
  setToken,
};
