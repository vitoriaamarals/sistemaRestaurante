import express from 'express';
import pedidoController from '../controllers/pedidoController.js';

const pedidoRoute = express.Router();

pedidoRoute.post('/pedido', pedidoController.createPedido);
pedidoRoute.post('/pedido/itens', pedidoController.addItensToPedido);
pedidoRoute.get('/pedidos', pedidoController.getPedidos);
pedidoRoute.get('/pedidos/:id', pedidoController.getPedidoById);
pedidoRoute.get('/cliente/:id_cliente/pedidos', pedidoController.getPedidosByCliente);
pedidoRoute.put('/pedidos/:id', pedidoController.updatePedido);
pedidoRoute.delete('/pedidos/:id', pedidoController.deletePedido);


export default pedidoRoute;
