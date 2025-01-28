import categoriaService from '../services/categoriaService.js';

const createCategoria = async (req, res) => {
  try {
    const categoria = await categoriaService.createCategoria(req.body);
    res.status(201).json(categoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCategorias = async (req, res) => {
  try {
    const categorias = await categoriaService.getCategorias();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/*const getCategoriaById = async (req, res) => {
  try {
    const categoria = await categoriaService.getCategoriaById(req.params.id);
    if (!categoria) {
      return res.status(404).json({ error: 'Categoria não encontrada' });
    }
    res.status(200).json(categoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};*/

const updateCategoria = async (req, res) => {
  try {
    const categoria = await categoriaService.updateCategoria(req.params.id, req.body);
    res.status(200).json(categoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCategoria = async (req, res) => {
  try {
    await categoriaService.deleteCategoria(req.params.id);
    res.status(200).json({ message: 'Categoria deletada com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  createCategoria,
  getCategorias,
  //getCategoriaById,
  updateCategoria,
  deleteCategoria,
};
