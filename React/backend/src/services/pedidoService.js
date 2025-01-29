import pedidoRepository from '../repositories/pedidoRepository.js';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createPedido = async (data) => {
  try {
    // Cria o pedido e associa a marmita ao pedido
    const pedido = await prisma.pedido.create({
      data: {
        id_cliente: data.id_cliente, // ID do cliente
        data_pedido: new Date(), // Data atual
        status_pedido: "Pedido Realizado",
        id_tipo_marmita: data.id_tipo_marmita, // ID da marmita, que já contém o tipo
      },
      include: {
        tipoMarmita: true, // Incluir a marmita associada ao pedido no retorno
      },
    });

    return pedido;
  } catch (error) {
    throw new Error("Erro ao criar pedido: " + error.message);
  }
};

const addItensToPedido = async (data) => {
  try {
    // Verifica se o pedido existe antes de adicionar os itens
    const pedidoExistente = await prisma.pedido.findUnique({
      where: { id_pedido: data.id_pedido }, 
    });

    if (!pedidoExistente) {
      throw new Error('Pedido não encontrado');
    }

    // Mapeando os itens a serem inseridos
    const itensParaAdicionar = data.itensSelecionados.map((item) => ({
      id_item_selecionado: Math.floor(Math.random() * 1000000),  // Geração aleatória do ID
      id_pedido: data.id_pedido,  // A string do id_pedido
      id_item_cardapio: item.id_item_cardapio,
      id_tipo_marmita: pedidoExistente.id_tipo_marmita, // Mantém o tipo da marmita do pedido
    }));

    // Exibe os itens que serão criados no console
    //console.log("Itens a serem criados:", itensParaAdicionar);

    await prisma.itensSelecionados.createMany({
      data: itensParaAdicionar,
    });

    // Busca os itens adicionados com seus IDs para retornar na resposta
    const itensAdicionados = await prisma.itensSelecionados.findMany({
      where: { id_pedido: data.id_pedido },
    });

    return {
      mensagem: 'Itens adicionados ao pedido com sucesso!',
      itensAdicionados,
    }; // Retorna todos os itens criados
  } catch (error) {
    throw new Error('Erro ao adicionar itens ao pedido: ' + error.message);
  }
};


const getPedidos = async () => {
  return await pedidoRepository.getPedidos();
};

const getPedidoById = async (id) => {
  return await pedidoRepository.getPedidoById(id);
};

const getPedidosByCliente = async (id_cliente) => {
  try {
    const clienteComPedidos = await prisma.cliente.findUnique({
      where: { id_cliente: id_cliente },
      include: {
        pedidos: true, // Incluir os pedidos do cliente
      },
    });

    return clienteComPedidos.pedidos;
  } catch (error) {
    throw new Error('Erro ao obter pedidos: ' + error.message);
  }
};

const updatePedido = async (id, data) => {
  // Verifique se o pedido existe
  const pedidoExistente = await prisma.pedido.findUnique({
    where: { id_pedido: id }
  });
  
  if (!pedidoExistente) {
    throw new Error('Pedido não encontrado');
  }

  // Atualize o pedido
  const pedidoAtualizado = await prisma.pedido.update({
    where: { id_pedido: id },
    data: data,
  });

  return pedidoAtualizado;
};

const deletePedido = async (id) => {
  return await pedidoRepository.deletePedido(id);
};

export default {
  createPedido,
  addItensToPedido,
  getPedidos,
  getPedidoById,
  getPedidosByCliente,
  updatePedido,
  deletePedido,
};
