import prisma from '../connection/prismaClient.js';

const createPedido = async (data) => {
  return await prisma.pedido.create({ data });
};

const getPedidos = async () => {
  return await prisma.pedido.findMany();
};

const getPedidoById = async (id) => {
  return await prisma.pedido.findUnique({ where: { id_pedido: id } });
};

const getPedidosByClienteId = async (id_cliente) => {
  try {
    const pedidos = await prisma.pedido.findMany({
      where: {
        id_cliente: id_cliente, // Relaciona o pedido ao id do cliente
      },
    });

    return pedidos;
  } catch (error) {
    throw new Error('Erro ao consultar pedidos: ' + error.message);
  }
};

const updatePedido = async (id, data) => {
  return await prisma.pedido.update({
    where: { id_pedido: id },
    data,
  });
};

const deletePedido = async (id) => {
  return await prisma.pedido.delete({ where: { id_pedido: id } });
};

export default {
  createPedido,
  getPedidos,
  getPedidoById,
  getPedidosByClienteId,
  updatePedido,
  deletePedido,
};
