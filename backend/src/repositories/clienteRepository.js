import prisma from "../connection/prismaClient.js";

const findByEmail = async (email) => {
  return prisma.cliente.findUnique({ where: { email } });
};

const createCliente = async (data) => {
  return prisma.cliente.create({ data });
};

const findById = async (id_cliente) => {
  return prisma.cliente.findUnique({
    where: { id_cliente },
    select: {
      id_cliente: true,
      nome_cliente: true,
      email: true,
      telefone: true,
    },
  });
};

const updateCliente = async (id_cliente, data) => {
  return await prisma.cliente.update({
    where: { id_cliente },
    data,
  });
};

export default {
  findByEmail,
  createCliente,
  findById,
  updateCliente
};

