import estoqueService from '../services/estoqueService.js';

const createEstoque = async (req, res) => {
  try {
    const produto = await estoqueService.createEstoque(req.body);
    res.status(201).json(produto);
  } catch (error) {
    res.status(400).json({ error: error.message }); 
  }
};

const getEstoques = async (req, res) => {
  try {
    const estoques = await estoqueService.getEstoques();
    res.status(200).json(estoques);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEstoqueById = async (req, res) => {
  try {
    const estoque = await estoqueService.getEstoqueById(req.params.id);
    if (!estoque) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.status(200).json(estoque);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateEstoque = async (req, res) => {
  try {
    const estoque = await estoqueService.updateEstoque(req.params.id, req.body);
    res.status(200).json(estoque);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteEstoque = async (req, res) => {
  try {
    await estoqueService.deleteEstoque(req.params.id);
    res.status(200).json({ message: 'Produto deletado com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  createEstoque,
  getEstoques,
  getEstoqueById,
  updateEstoque,
  deleteEstoque,
};
