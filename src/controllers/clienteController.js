import clienteService from '../services/clienteService.js';

const createCliente = async (req, res) => {
  try {
    const cliente = await clienteService.createCliente(req.body);
    res.status(201).json(cliente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getClientes = async (req, res) => {
  try {
    const clientes = await clienteService.getClientes();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getClienteById = async (req, res) => {
  try {
    const cliente = await clienteService.getClienteById(req.params.id);
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }
    res.status(200).json(cliente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCliente = async (req, res) => {
  const id_cliente = req.params.id;
  const { cpf, nome_cliente, email, senha, telefone } = req.body;

  try {
    const clienteAtualizado = await clienteService.updateCliente(id_cliente, {
      cpf,
      nome_cliente,
      email,
      senha,
      telefone,
    });
    res
      .status(200)
      .json({ msg: "Cliente atualizado com sucesso!", clienteAtualizado });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Erro ao atualizar cliente!" });
  }
};


const deleteCliente = async (req, res) => {
  try {
    await clienteService.deleteCliente(req.params.id);
    res.status(200).json({ message: 'Cliente deletado com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  createCliente,
  getClientes,
  getClienteById,
  updateCliente,
  deleteCliente,
};
