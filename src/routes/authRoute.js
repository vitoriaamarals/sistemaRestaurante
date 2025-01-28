import express from 'express';
import authController from '../controllers/authController.js';
import { checkToken } from '../services/clienteService.js';

const authRoute = express.Router();

authRoute.post('/registrar', authController.register);
authRoute.post('/login', authController.login);
authRoute.get('/user/:id', checkToken, authController.getUser);

export default authRoute;
