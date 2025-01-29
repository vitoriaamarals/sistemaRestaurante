import express from 'express';
import itemSelecionadoController from '../controllers/itemSelecionadoController.js';

const itemSelecionadoRoute = express.Router();

// Adicionar item à marmita
itemSelecionadoRoute.post('/item-selecionado/adicionar', itemSelecionadoController.addItemToMarmita);

// Remover item da marmita
itemSelecionadoRoute.delete('/item-selecionado/remover', itemSelecionadoController.removeItemFromMarmita);

export default itemSelecionadoRoute;
