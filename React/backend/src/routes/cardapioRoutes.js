import express from 'express';
import cardapioController from '../controllers/cardapioController.js';

const cardapioRoute = express.Router();

cardapioRoute.post('/categoria/:id/adicionarCardapio', cardapioController.addItemToCategory);
cardapioRoute.post('/cardapio/adicionar', cardapioController.createCardapio);
cardapioRoute.get('/cardapio', cardapioController.getCardapios);
cardapioRoute.get('/categoria/:id/cardapio', cardapioController.getCategoryWithMenu);
//cardapioRoute.get('/:id', cardapioController.getCardapioById);
cardapioRoute.put('/cardapio/editar/:id', cardapioController.updateCardapio);
cardapioRoute.delete('/cardapio/:id', cardapioController.deleteCardapio);

export default cardapioRoute;
