const Usuario = require('../models/usuarioModel');


const crearUsuario = async (data) => {
  return await Usuario.create(data);
};


const obtenerUsuarios = async () => {
  return await Usuario.findAll();
};


const obtenerUsuarioPorId = async (id) => {
  return await Usuario.findByPk(id);
};


const actualizarUsuario = async (id, data) => {
  return await Usuario.update(data, { where: { id } });
};


const eliminarUsuario = async (id) => {
  return await Usuario.destroy({ where: { id } });
};

module.exports = { crearUsuario, obtenerUsuarios, obtenerUsuarioPorId, actualizarUsuario, eliminarUsuario };
