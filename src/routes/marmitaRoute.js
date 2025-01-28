import express from 'express';
import marmitaController from '../controllers/marmitaController.js';

const marmitaRoute = express.Router();

marmitaRoute.post('/marmita/adicionar', marmitaController.createMarmita);
marmitaRoute.get('/marmita', marmitaController.getMarmitas);
marmitaRoute.put('/marmita/editar/:id', marmitaController.updateMarmita);
marmitaRoute.delete('/marmita/:id', marmitaController.deleteMarmita);

export default marmitaRoute;
