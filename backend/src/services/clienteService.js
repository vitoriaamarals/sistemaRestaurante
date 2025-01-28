import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import clienteRepository from '../repositories/clienteRepository.js';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const SALT_ROUNDS = 10;

const registerCliente = async (data) => {
  const { nome_cliente, email, senha, cpf, telefone } = data;

  // Valida se o cliente já existe
  const existingCliente = await clienteRepository.findByEmail(email);
  if (existingCliente) throw new Error('Email já está em uso');

  // Hash da senha
  const senhaHash = await bcrypt.hash(senha, SALT_ROUNDS);

  // Cria cliente
  return clienteRepository.createCliente({
    nome_cliente,
    email,
    senha: senhaHash,
    cpf,
    telefone,
  });
};

const authenticateCliente = async (email, senha) => {
  const cliente = await clienteRepository.findByEmail(email);
  if (!cliente) throw new Error('Usuário não encontrado');

  const senhaValida = await bcrypt.compare(senha, cliente.senha);
  if (!senhaValida) throw new Error('Senha inválida');

  // Gerar o JWT Token
  const token = jwt.sign({ id_cliente: cliente.id_cliente }, process.env.JWT_SECRET, {
    expiresIn: '1h', // O token vai expirar em 1 hora
  });

  return token; // Retorna o token gerado
};

const getClienteById = async (id_cliente) => {
  const cliente = await clienteRepository.findById(id_cliente);

  if (!cliente) {
    throw new Error('Cliente não encontrado!');
  }

  return cliente;
};

export const checkToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Acesso negado!' });
  }

  try {
    const secret = process.env.JWT_SECRET;
    const decoded = jwt.verify(token, secret);

    req.id_cliente = decoded.id_cliente;
    console.log("Token recebido:", req.headers["authorization"]);

    next();
  } catch (err) {
    res.status(400).json({ error: 'Token inválido!' });
  }
};

const getClientes = async () => {
  return await prisma.cliente.findMany();
};

const updateCliente = async (id_cliente, data) => {
  const cliente = await clienteRepository.findById(id_cliente);

  if (!cliente) {
    throw new Error("Cliente não encontrado!");
  }

  const updateData = { ...data };

  // Se uma nova senha foi passada, re-hash
  if (data.senha) {
    const salt = await bcrypt.genSalt(12);
    updateData.senha = await bcrypt.hash(data.senha, salt);
  }

  return await clienteRepository.updateCliente(id_cliente, updateData);
};



const deleteCliente = async (id) => {
  return await prisma.cliente.delete({
    where: {
      id_cliente: id,
    },
  });
};

export default {
  registerCliente,
  authenticateCliente,
  getClienteById,
  getClientes,
  deleteCliente,
  updateCliente

};

