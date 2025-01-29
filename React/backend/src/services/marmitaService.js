import prisma from "../connection/prismaClient.js";

const createMarmita = async (data) => {
  return await prisma.marmita.create({
    data,
  });
};

const getMarmitas = async () => {
  return await prisma.marmita.findMany();
};

const updateMarmita = async (id, data) => {
  return await prisma.marmita.update({
    where: { id_tipo_marmita: id },
    data,
  });
};

const deleteMarmita = async (id) => {
  return await prisma.marmita.delete({
    where: { id_tipo_marmita: id },
  });
};

export default {
  createMarmita,
  getMarmitas,
  updateMarmita,
  deleteMarmita,
};
