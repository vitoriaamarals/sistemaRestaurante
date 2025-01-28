import prisma from '../connection/prismaClient.js';

const createEstoque = async (data) => {
  return await prisma.estoque.create({ data });
};

const getEstoques = async () => {
  return await prisma.estoque.findMany();
};

const getEstoqueById = async (id) => {
  return await prisma.estoque.findUnique({ where: { id_produto: id } });
};

const updateEstoque = async (id, data) => {
  return await prisma.estoque.update({
    where: { id_produto: id },
    data,
  });
};

const deleteEstoque = async (id) => {
  return await prisma.estoque.delete({ where: { id_produto: id } });
};

export default {
  createEstoque,
  getEstoques,
  getEstoqueById,
  updateEstoque,
  deleteEstoque,
};
