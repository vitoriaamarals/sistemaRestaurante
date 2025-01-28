import estoqueRepository from '../repositories/estoqueRepository.js';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createEstoque = async (data) => {
  try {
    // Verifica se já existe um produto com o mesmo nome
    const produtoExistente = await prisma.estoque.findUnique({
      where: {
        nome_produto: data.nome_produto, // Verifica pelo nome do produto
      },
    });

    if (produtoExistente) {
      throw new Error('Já existe um produto com esse nome.');
    }

    // Caso não exista, cria o produto
    const produto = await prisma.estoque.create({
      data,
    });
    return produto;
  } catch (error) {
    throw error;
  }
};

const getEstoques = async () => {
  return await estoqueRepository.getEstoques();
};

const getEstoqueById = async (id) => {
  return await estoqueRepository.getEstoqueById(id);
};

const updateEstoque = async (id, data) => {
  return await estoqueRepository.updateEstoque(id, data);
};

const deleteEstoque = async (id) => {
  return await estoqueRepository.deleteEstoque(id);
};

export default {
  createEstoque,
  getEstoques,
  getEstoqueById,
  updateEstoque,
  deleteEstoque,
};
