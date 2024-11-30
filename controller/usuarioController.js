const UsuarioService = require('../service/usuarioService');


const crearUsuario = async (req, res) => {
  try {
    const usuario = await UsuarioService.crearUsuario(req.body);
    res.json(usuario);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const obtenerUsuarios = async (req, res) => {
  try {
    const usuario = await UsuarioService.obtenerUsuarios();
    res.json(usuario);
  } catch (error) {
    res.json({ error: error.message });
  }
};


const obtenerUsuarioPorId = async (req, res) => {
  try {
    const usuario = await UsuarioService.obtenerUsuarioPorId(req.params.id);
    if (!usuario) {
      return res.json({ error: 'Usuario no encontrado' });
    }
    res.json(usuario);
  } catch (error) {
    res.json({ error: error.message });
  }
};


const actualizarUsuario = async (req, res) => {
  try {
    const usuario = await UsuarioService.actualizarUsuario(req.params.id, req.body);
    if (usuario[0] === 0) {
      return res.json({ error: 'Usuario no encontrado' });
    }
    res.json({ message: 'Usuario actualizado correctamente' });
  } catch (error) {
    res.json({ error: error.message });
  }
};


const eliminarUsuario = async (req, res) => {
  try {
    const result = await UsuarioService.eliminarUsuario(req.params.id);
    if (result === 0) {
      return res.json({ error: 'Usuario no encontrado' });
    }
    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = { crearUsuario, obtenerUsuarios, obtenerUsuarioPorId, actualizarUsuario, eliminarUsuario };
