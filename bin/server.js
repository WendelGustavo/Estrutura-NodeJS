// Se existir certificado SSL, inicia o servidor com https
// const https = require('https');
require('dotenv').config({ path: '.env' });

const app = require('..');

app.use((req, res, next) => {
  next();
});

// Define a porta no .env onde será executada a API
// const portHTTP = process.env.APP_PORT_HTTP || config.app.port; // define a porta
// Iniciando a aplicação (servidor)

app.listen(process.env.APP_PORT_HTTP, () => { console.log(`console.log(server is runing at port ${process.env.APP_PORT_HTTP})`); });

// Se existir certificado SSL, inicia o servidor com https
/**
https
  .createServer({
    key: fs.readFileSync(process.env.CERT_PATH_KEY),
    cert: fs.readFileSync(process.env.CERT_PATH_CERT),
  }, app)
  .listen(process.env.APP_PORT_HTTPS, () => {
    console.log(`console.log(server is runing at port ${process.env.APP_PORT_HTTPS})`);
  });
*/
