import cardapioService from '../services/cardapioService.js';

const createCardapio = async (req, res) => {
  try {
    const novoCardapio = await cardapioService.createCardapio(req.body);
    res.status(201).json(novoCardapio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCardapios = async (req, res) => {
  try {
    const cardapios = await cardapioService.getCardapio();
    res.status(200).json(cardapios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

async function getCategoryWithMenu(req, res) {
  const { id } = req.params; // ID da categoria

  try {
    const categoria = await cardapioService.getCategoryWithMenu(parseInt(id));
    res.status(200).json(categoria);
  } catch (error) {
    console.error(error.message);
    res.status(404).json({ message: error.message });
  }
}

const updateCardapio = async (req, res) => {
  try {
    const { id } = req.params; // Pega o ID da URL
    const data = req.body; // Pega os dados para atualização

    const cardapioAtualizado = await cardapioService.updateCardapio(parseInt(id), data);

    res.status(200).json(cardapioAtualizado); // Retorna o cardápio atualizado
  } catch (error) {
    res.status(400).json({ error: error.message }); // Retorna erro, se houver
  }
};

async function addItemToCategory(req, res) {
  const { id } = req.params; // ID da categoria
  const data = req.body; // Dados do item do cardápio

  try {
    const novoItem = await cardapioService.addItemToCategory(parseInt(id), data);
    res.status(201).json(novoItem);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Erro ao adicionar item ao cardápio.' });
  }
}

const deleteCardapio = async (req, res) => {
  try {
    const { id } = req.params; 
    const cardapioDeletado = await cardapioService.deleteCardapio(parseInt(id));

    if (!cardapioDeletado) {
      return res.status(404).json({ error: 'Cardápio não encontrado.' });
    }
    res.status(200).json({ message: 'Cardápio deletado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  createCardapio,
  getCardapios,
  getCategoryWithMenu,
  addItemToCategory,
  updateCardapio,
  deleteCardapio,
};
