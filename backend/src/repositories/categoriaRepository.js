import prisma from '../connection/prismaClient.js';

const createCategoria = async (data) => {
  return await prisma.categoria.create({
    data,
  });
};

const getCategorias = async () => {
  return await prisma.categoria.findMany();
};

/*const getCategoriaById = async (id) => {
  return await prisma.categoria.findUnique({
    where: { id_categoria: id },
  });
};*/

const updateCategoria = async (id, data) => {
  return await prisma.categoria.update({
    where: { id_categoria: id },
    data,
  });
};

const deleteCategoria = async (id) => {
  return await prisma.categoria.delete({
    where: { id_categoria: id },
  });
};

export default {
  createCategoria,
  getCategorias,
  //getCategoriaById,
  updateCategoria,
  deleteCategoria,
};
