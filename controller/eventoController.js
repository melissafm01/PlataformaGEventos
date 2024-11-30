const eventoService = require('../service/eventoService');

const crearEvento = async (req, res) => {
  try {
    const evento = await eventoService.crearEvento(req.body);
    res.json(evento);
  } catch (error) {
    res.json({ error: error.message });
  }
};


const obtenerEvento = async (req, res) => {
  try {
    const evento = await eventoService.obtenerEvento();
    res.json(evento);
  } catch (error) {
    res.json({ error: error.message });
  }
};

// Obtener un evento por ID
const obtenerEventoPorId = async (req, res) => {
  try {
    const evento = await eventoService.obtenerEventoPorId(req.params.id);
    if (!evento) {
      return res.json({ error: 'evento no encontrado' });
    }
    res.json(evento);
  } catch (error) {
    res.json({ error: error.message });
  }
};


const actualizarEvento = async (req, res) => {
  try {
    const evento = await eventoService.actualizarEvento(req.params.id, req.body);
    if (evento[0] === 0) {
      return res.json({ error: 'evento no encontrado' });
    }
    res.json({ message: 'evento actualizado correctamente' });
  } catch (error) {
    res.json({ error: error.message });
  }
};


const eliminarEvento = async (req, res) => {
  try {
    const result = await eventoService.eliminarEvento(req.params.id);
    if (result === 0) {
      return res.json({ error: 'evento no encontrado' });
    }
    res.json({ message: 'evento eliminado correctamente' });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = { crearEvento, obtenerEvento, obtenerEventoPorId, actualizarEvento, eliminarEvento };
