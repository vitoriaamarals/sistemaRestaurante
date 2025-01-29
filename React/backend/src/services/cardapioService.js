import cardapioRepository from '../repositories/cardapioRepository.js';
import prisma from '../connection/prismaClient.js';

const createCardapio = async (data) => {
  // Verifica se a categoria existe no banco
  const categoria = await prisma.categoria.findUnique({
    where: {
      id_categoria: data.id_categoria,
    },
  });

  if (!categoria) {
    throw new Error('Categoria não existe. Por favor, selecione uma categoria válida.');
  }

  // Adiciona o item ao cardápio
  const itemCardapio = await prisma.cardapio.create({
    data,
  });

  return itemCardapio;
};

const getCardapio = async () => {
  return await cardapioRepository.getCardapio();
};

// Serviço para buscar uma categoria e seus itens do cardápio
async function getCategoryWithMenu(idCategoria) {
  const categoria = await cardapioRepository.findCategoryWithMenu(idCategoria);

  if (!categoria) {
    throw new Error('Categoria não encontrada.');
  }

  return categoria;
}

/*const getCardapioById = async (id) => {
  return await cardapioRepository.getCardapioById(parseInt(id));
};*/

async function addItemToCategory(idCategoria, data) {
  return await cardapioRepository.addItemToCategory(idCategoria, data);
}

const updateCardapio = async (id, data) => {
  // Verifica se a categoria fornecida no 'data' existe
  const categoria = await prisma.categoria.findUnique({
    where: { id_categoria: data.id_categoria }
  });

  if (!categoria) {
    throw new Error('Categoria não existe. Por favor, selecione uma categoria válida.');
  }

  // Verifica se o cardápio com o id fornecido existe
  const cardapioExistente = await prisma.cardapio.findUnique({
    where: { id_item_cardapio: id },
  });

  if (!cardapioExistente) {
    throw new Error('Cardápio não encontrado.');
  }

  // Realiza a atualização do cardápio
  return await prisma.cardapio.update({
    where: { id_item_cardapio: id },
    data: {
      nome_item_cardapio: data.nome_item_cardapio,
      descricao: data.descricao,
      id_categoria: data.id_categoria,
    },
  });
};


const deleteCardapio = async (id) => {
  // Verifica se o cardápio existe
  const cardapioExistente = await prisma.cardapio.findUnique({
    where: { id_item_cardapio: id },
  });

  if (!cardapioExistente) {
    throw new Error('Cardápio não encontrado.');
  }
  return await prisma.cardapio.delete({
    where: { id_item_cardapio: id },
  });
};

export default {
  createCardapio,
  getCardapio,
  getCategoryWithMenu,
  addItemToCategory,
 // getCardapioById,
  updateCardapio,
  deleteCardapio,
};
