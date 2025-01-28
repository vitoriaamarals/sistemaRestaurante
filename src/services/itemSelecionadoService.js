import itemSelecionadoRepository from '../repositories/itemSelecionadoRepository.js';

// Lógica para adicionar item à marmita
const addItemToMarmita = async (id_item_cardapio, id_pedido, id_tipo_marmita) => {
  return await itemSelecionadoRepository.addItemToMarmita(id_item_cardapio, id_pedido, id_tipo_marmita);
};

// Lógica para remover item da marmita
const removeItemFromMarmita = async (id_item_cardapio, id_pedido, id_tipo_marmita) => {
  return await itemSelecionadoRepository.removeItemFromMarmita(id_item_cardapio, id_pedido, id_tipo_marmita);
};

export default {
  addItemToMarmita,
  removeItemFromMarmita,
};
