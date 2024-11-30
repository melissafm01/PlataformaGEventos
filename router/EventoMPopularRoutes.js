const express = require('express');
const router = express.Router();
const EventoMPopularController = require('../controller/EventoMPopularController');


router.get('/',EventoMPopularController.EventomasPopular);

module.exports = router;
