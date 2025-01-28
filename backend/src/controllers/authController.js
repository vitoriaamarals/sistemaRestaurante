import jwt from 'jsonwebtoken';
import clienteService from '../services/clienteService.js';

const JWT_SECRET = process.env.JWT_SECRET;

const register = async (req, res) => {
  try {
    const cliente = await clienteService.registerCliente(req.body);
    res.status(201).json({ message: 'Usuário registrado com sucesso!', cliente });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const cliente = await clienteService.authenticateCliente(email, senha);

    const token = jwt.sign({ id_cliente: cliente.id_cliente }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login realizado com sucesso!', token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getUser = async (req, res) => {
  try {
    const id_cliente = req.params.id;
    const cliente = await clienteService.getClienteById(id_cliente);

    res.status(200).json({ cliente });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

export default { 
  register,
  login,
  getUser
};

