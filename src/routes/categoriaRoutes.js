import express from 'express';
import categoriaController from '../controllers/categoriaController.js';

const categoriaRoute = express.Router();

categoriaRoute.post('/novaCategoria', categoriaController.createCategoria);
categoriaRoute.get('/categorias', categoriaController.getCategorias);
//categoriaRoute.get('/categoria/:id', categoriaController.getCategoriaById);
categoriaRoute.put('/categoria/:id', categoriaController.updateCategoria);
categoriaRoute.delete('/categoria/:id', categoriaController.deleteCategoria);

export default categoriaRoute;
