import express from 'express';
import clienteController from '../controllers/clienteController.js';
import { checkToken } from '../services/clienteService.js';

const clienteRoute = express.Router();

//clienteRoute.post('/cliente', clienteController.createCliente);
clienteRoute.get('/clientes', clienteController.getClientes);
//clienteRoute.get('/cliente/:id', clienteController.getClienteById);
clienteRoute.put('/cliente/:id', checkToken, clienteController.updateCliente);
clienteRoute.delete('/cliente/:id', checkToken, clienteController.deleteCliente);

export default clienteRoute;
