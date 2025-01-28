import itemSelecionadoService from '../services/itemSelecionadoService.js';

// Adicionar item à marmita
const addItemToMarmita = async (req, res) => {
  try {
    const { id_item_cardapio, id_pedido, id_tipo_marmita } = req.body;

    // Lógica para adicionar item
    const itemAdicionado = await itemSelecionadoService.addItemToMarmita(id_item_cardapio, id_pedido, id_tipo_marmita);
    
    res.status(201).json({ message: 'Item adicionado à marmita', itemAdicionado });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Remover item da marmita
const removeItemFromMarmita = async (req, res) => {
  try {
    const { id_item_cardapio, id_pedido, id_tipo_marmita } = req.body;

    // Lógica para remover item
    const itemRemovido = await itemSelecionadoService.removeItemFromMarmita(id_item_cardapio, id_pedido, id_tipo_marmita);
    
    res.status(200).json({ message: 'Item removido da marmita', itemRemovido });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  addItemToMarmita,
  removeItemFromMarmita,
};
