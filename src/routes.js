const {Router} = require('express');
const CepController = require('./controller/CepController');

const routes = Router();

routes.post('/cep', CepController.store);

module.exports = routes;


