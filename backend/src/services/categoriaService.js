import categoriaRepository from '../repositories/categoriaRepository.js';

const createCategoria = async (data) => {
  return await categoriaRepository.createCategoria(data);
};

const getCategorias = async () => {
  return await categoriaRepository.getCategorias();
};

/*const getCategoriaById = async (id) => {
  return await categoriaRepository.getCategoriaById(parseInt(id));
};*/


const updateCategoria = async (id, data) => {
  return await categoriaRepository.updateCategoria(parseInt(id), data);
};

const deleteCategoria = async (id) => {
  return await categoriaRepository.deleteCategoria(parseInt(id));
};

export default {
  createCategoria,
  getCategorias,
  //getCategoriaById,
  updateCategoria,
  deleteCategoria,
};
