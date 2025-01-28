import pedidoService from '../services/pedidoService.js';

const createPedido = async (req, res) => {
  try {
    const { id_cliente, id_tipo_marmita, valor_marmita } = req.body;
    const pedido = await pedidoService.createPedido({
      id_cliente,
      id_tipo_marmita,
      valor_marmita,
    });

    res.status(201).json(pedido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addItensToPedido = async (req, res) => {
  try {
    const { id_pedido, id_marmita, itensSelecionados } = req.body; // Update to match the new structure
    const updatedPedido = await pedidoService.addItensToPedido({
      id_pedido,
      id_marmita,
      itensSelecionados,
    });

    res.status(200).json(updatedPedido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPedidos = async (req, res) => {
  try {
    const pedidos = await pedidoService.getPedidos();
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPedidoById = async (req, res) => {
  try {
    const pedido = await pedidoService.getPedidoById(req.params.id);
    if (!pedido) {
      return res.status(404).json({ error: 'Pedido não encontrado' });
    }
    res.status(200).json(pedido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPedidosByCliente = async (req, res) => {
  const { id_cliente } = req.params; // Obter o id_cliente da URL

  try {
    const pedidos = await pedidoService.getPedidosByCliente(id_cliente);
    if (!pedidos) {
      return res.status(404).json({ error: 'Cliente não encontrado ou sem pedidos' });
    }
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePedido = async (req, res) => {
  try {
    const pedido = await pedidoService.updatePedido(req.params.id, req.body);
    res.status(200).json(pedido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePedido = async (req, res) => {
  try {
    await pedidoService.deletePedido(req.params.id);
    res.status(200).json({ message: 'Pedido deletado com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/*
const criarPedido = async (req, res) => {
  try {
    const pedido = await pedidoService.criarPedido(req.body);
    res.status(201).json(pedido);
  } catch (error) {
    console.error("Erro ao criar pedido:", error);
    res.status(500).json({ message: error.message });
  }
};

const obterPedidoPorId = async (req, res) => {
  try {
    const pedido = await pedidoService.obterPedidoPorId(req.params.id);
    if (!pedido) {
      return res.status(404).json({ message: "Pedido não encontrado" });
    }
    res.status(200).json(pedido);
  } catch (error) {
    console.error("Erro ao obter pedido:", error);
    res.status(500).json({ message: error.message });
  }
};
*/
export default {
  createPedido,
  addItensToPedido,
  getPedidos,
  getPedidoById,
  getPedidosByCliente,
  updatePedido,
  deletePedido,
  //criarPedido,
  //obterPedidoPorId
};
