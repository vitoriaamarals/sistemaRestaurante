import estoqueService from '../services/estoqueService.js';
import prisma from '../connection/prismaClient.js';

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
  const { id } = req.params;
  const { nome_produto, qtd_atual, qtd_minima, status_produto, unidade_medida } = req.body;
  try {
    const produtoAtualizado = await estoqueService.updateEstoque(Number(id), {
      nome_produto,
      qtd_atual,
      qtd_minima,
      status_produto,
      unidade_medida
    });
    if (!produtoAtualizado) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    return res.status(200).json(produtoAtualizado);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao atualizar produto', error });
  }
};

const deleteEstoque = async (req, res) => {
  const { id } = req.params;
  try {
    const produtoDeletado = await estoqueService.deleteEstoque(Number(id));
    if (!produtoDeletado) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    return res.status(200).json({ message: 'Produto deletado com sucesso' });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao deletar produto', error });
  }
};

export default {
  createEstoque,
  getEstoques,
  getEstoqueById,
  updateEstoque,
  deleteEstoque,
};
