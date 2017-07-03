const express = require('express');
const app = express();

//aquí  le decimos qque use los archivos estáticos y que se muestren al llamar a la ruta '/'
app.use('/', express.static('public'));

//aquí le decimos al framework desde que puerto
app.listen(3000, () => {
  console.log('Listening on 3000');
});