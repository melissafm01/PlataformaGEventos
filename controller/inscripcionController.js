const inscripcionService = require('../service/inscripcionService');


const crearInscripcion = async (req, res) => {
  const { usuario_id, evento_id } = req.body;
  try {
    const inscripcion = await inscripcionService.inscribirUsuario(usuario_id, evento_id);
    res.json(inscripcion);
  } catch (error) {
    res.json({ error: error.message });
  }
};


module.exports = { crearInscripcion };
