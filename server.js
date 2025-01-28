import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import clienteRoute from './src/routes/clienteRoutes.js';
import pedidoRoute from './src/routes/pedidoRoutes.js';
import estoqueRoute from './src/routes/estoqueRoutes.js';
import categoriaRoute from './src/routes/categoriaRoutes.js';
import cardapioRoute from './src/routes/cardapioRoutes.js';
import marmitaRoute from './src/routes/marmitaRoute.js';
import itemSelecionadoRoute from './src/routes/itemSelecionadoRoute.js';
import authRoute from './src/routes/authRoute.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Rotas
app.use(clienteRoute);
app.use(pedidoRoute);
app.use(estoqueRoute);
app.use(categoriaRoute);
app.use(cardapioRoute);
app.use(marmitaRoute);
app.use(itemSelecionadoRoute);
app.use(authRoute);


// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
