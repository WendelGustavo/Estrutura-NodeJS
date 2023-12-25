// eslint-disable-next-line func-names
module.exports = async function (req, res, next) {
  // eslint-disable-next-line no-console
  console.log('authMiddleware');

  /**
   * Implemente aqui a lógica do middleware de autenticação.
   */

  next();
};
