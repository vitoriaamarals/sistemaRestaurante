import express from 'express';
import estoqueController from '../controllers/estoqueController.js';

const estoqueRoute = express.Router();

estoqueRoute.post('/estoque', estoqueController.createEstoque);
estoqueRoute.get('/estoque', estoqueController.getEstoques);
estoqueRoute.get('/estoque/:id', estoqueController.getEstoqueById);
estoqueRoute.put('/estoque/:id', estoqueController.updateEstoque);
estoqueRoute.delete('/estoque/:id', estoqueController.deleteEstoque);

export default estoqueRoute;
