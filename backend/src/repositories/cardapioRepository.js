import prisma from "../connection/prismaClient.js";

const createCardapio = async (data) => {
  return await prisma.cardapio.create({
    data,
  });
};

const getCardapio = async () => {
  return await prisma.cardapio.findMany();
};

/*const getCardapioById = async (id) => {
  return await prisma.cardapio.findUnique({
    where: { id_item_cardapio: id },
  });
};*/

async function addItemToCategory(idCategoria, data) {
  return await prisma.cardapio.create({
    data: {
      ...data,
      id_categoria: idCategoria,
    },
  });
}

// Busca uma categoria e seus itens do cardápio no banco de dados
async function findCategoryWithMenu(idCategoria) {
  return await prisma.categoria.findUnique({
    where: {
      id_categoria: idCategoria,
    },
    include: {
      itensCardapio: true, // Inclui os itens do cardápio associados
    },
  });
}

const updateCardapio = async (id, data) => {
  return await prisma.cardapio.update({
    where: { id_item_cardapio: id },
    data,
  });
};

const deleteCardapio = async (id) => {
  return await prisma.cardapio.delete({
    where: { id_item_cardapio: id },
  });
};

export default {
  createCardapio,
  getCardapio,
  findCategoryWithMenu,
  addItemToCategory,
  //getCardapioById,
  updateCardapio,
  deleteCardapio,
};
