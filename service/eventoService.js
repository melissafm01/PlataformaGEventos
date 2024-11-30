const Evento = require('../models/eventoModel');

const crearEvento = async (data) => {
  return await Evento.create(data);
};


const obtenerEvento = async () => {
  return await Evento.findAll();
};


const obtenerEventoPorId = async (id) => {
  return await Evento.findByPk(id);
};


const actualizarEvento = async (id, data) => {
  return await Evento.update(data, { where: { id } });
};


const eliminarEvento = async (id) => {
  return await Evento.destroy({ where: { id } });
};

module.exports = { crearEvento, obtenerEvento, obtenerEventoPorId, actualizarEvento, eliminarEvento };
