const express = require('express');
const router = express.Router();
const eventoController = require('../controller/eventoController');


router.post('/', eventoController.crearEvento);

  /* 
  {
  "nombre": "Concierto de Rock",
  "descripcion": "Un evento musical muy divertido.",
  "fecha_hora": "2024-12-20 20:00:00",
  "lugar": "Auditorio ",
  "capacidad_maxima": 500
}
*/
  
router.get('/', eventoController.obtenerEvento);
router.get('/:id', eventoController.obtenerEventoPorId);
router.put('/:id', eventoController.actualizarEvento);
router.delete('/:id', eventoController.eliminarEvento);

module.exports = router;