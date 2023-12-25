/**
 * Exemplo de controller,
 */

exports.example = async () => {
  // eslint-disable-next-line no-console
  console.log('controller example');
  return {
    status: 200,
    msg: {
      resultado: true,
      mensagem: 'Hello World!',
    },
    data: null,
  };
};
