const {Router} = require('express');
const rotas = Router();
const controlador = require('./controladores/controladores')

rotas.get('/', controlador.listar);

module.exports = rotas;
