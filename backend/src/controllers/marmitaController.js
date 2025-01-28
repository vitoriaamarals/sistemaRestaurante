import marmitaService from '../services/marmitaService.js';

const createMarmita = async (req, res) => {
  try {
    const { tipo_marmita } = req.body;

    // Define o preço dependendo do tipo da marmita e atribui o ID
    const preco = tipo_marmita.toLowerCase() === 'pequena' ? 20.00 : 28.00;
    const id_tipo_marmita = tipo_marmita.toLowerCase() === 'pequena' ? 1 : 2; // 1 para pequena, 2 para grande

    // Cria a marmita com o ID e o preço
    const novaMarmita = await marmitaService.createMarmita({ id_tipo_marmita, tipo_marmita, preco });
    res.status(201).json(novaMarmita);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMarmitas = async (req, res) => {
  try {
    const marmitas = await marmitaService.getMarmitas();
    res.status(200).json(marmitas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateMarmita = async (req, res) => {
  try {
    const { id } = req.params;
    const { tipo_marmita } = req.body;

    // Atualiza o preço dependendo do tipo de marmita
    const preco = tipo_marmita.toLowerCase() === 'pequena' ? 20.00 : 28.00;
    const id_tipo_marmita = tipo_marmita.toLowerCase() === 'pequena' ? 1 : 2; // 1 para pequena, 2 para grande

    // Atualiza a marmita com o ID e o preço
    const marmitaAtualizada = await marmitaService.updateMarmita(parseInt(id), { id_tipo_marmita, tipo_marmita, preco });
    res.status(200).json(marmitaAtualizada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteMarmita = async (req, res) => {
  try {
    const { id } = req.params;
    await marmitaService.deleteMarmita(parseInt(id));
    res.status(200).json({ message: 'Marmita deletada com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  createMarmita,
  getMarmitas,
  updateMarmita,
  deleteMarmita,
};
