// router/inscripcionRoutes.js
const express = require('express');
const router = express.Router();
const inscripcionController = require('../controller/inscripcionController');


router.post('/', inscripcionController.crearInscripcion);
/*
{
    "usuario_id": 1,
    "evento_id": 2,
    "estado": "cancelado"
  }
  */

module.exports = router;
