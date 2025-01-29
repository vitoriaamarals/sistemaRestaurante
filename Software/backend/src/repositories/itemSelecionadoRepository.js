import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Adicionar item à marmita
const addItemToMarmita = async (id_item_cardapio, id_pedido, id_tipo_marmita) => {
  return await prisma.itemSelecionado.create({
    data: {
      id_item_cardapio,
      id_pedido,
      id_tipo_marmita,
    },
  });
};

// Remover item da marmita
const removeItemFromMarmita = async (id_item_cardapio, id_pedido, id_tipo_marmita) => {
  return await prisma.itemSelecionado.delete({
    where: {
      id_item_cardapio_id_pedido_id_tipo_marmita: {
        id_item_cardapio,
        id_pedido,
        id_tipo_marmita,
      },
    },
  });
};

export default {
  addItemToMarmita,
  removeItemFromMarmita,
};
