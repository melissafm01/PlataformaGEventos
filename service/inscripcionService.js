// service/inscripcionService.js
const Inscripcion = require('../models/inscripcionModel');
const Usuario = require('../models/usuarioModel');
const Evento = require('../models/eventoModel');

// Crear una inscripción
const inscribirUsuario = async (usuarioId, eventoId) => {
    

  // Verificar si el usuario ya está inscrito en el evento
  const inscripcionExistente = await Inscripcion.findOne({
    where: { usuario_id: usuarioId, evento_id: eventoId }
  });
  if (inscripcionExistente) {
    throw new Error('El usuario ya está inscrito en este evento.');
  }


  // Verificar que el evento exista
  const evento = await Evento.findByPk(eventoId);
  if (!evento) {
    throw new Error('El evento no existe.');
  }


  // Verificar que haya espacio en el evento
  const inscripciones = await Inscripcion.count({ where: { evento_id: eventoId } });
  if (inscripciones >= evento.capacidad_maxima) {
    throw new Error('El evento está completo.');
  }

  
  // Crear inscripción
  const inscripcion = await Inscripcion.create({
    usuario_id: usuarioId,
    evento_id: eventoId
  });

  return inscripcion;
};


module.exports = { inscribirUsuario };
