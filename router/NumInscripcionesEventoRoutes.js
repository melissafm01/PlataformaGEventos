const express = require('express');
const router = express.Router();
const NumInscripcionesEventoController = require('../controller/NumInscripcionesEventoController');


router.get('/', NumInscripcionesEventoController.NumInscripcionesE);

module.exports = router;
