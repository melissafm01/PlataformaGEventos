const express = require("express");
const app = express();
const dotenv = require('dotenv');
const sequelize = require('./config/dataBase');
const eventoRoutes = require('./router/eventoRoutes');
const usuarioRoutes = require('./router/usuarioRoutes');
const inscripcionRoutes = require('./router/inscripcionRoutes'); // Importar las rutas de inscripciones
const NumInscripcionesEventoRoutes = require('./router/NumInscripcionesEventoRoutes');
const EventoMPopularRoutes = require('./router/EventoMPopularRoutes');
dotenv.config();

app.use(express.json());
app.use('/api/eventos', eventoRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/inscripciones', inscripcionRoutes);
app.use('/api/num-inscripciones',NumInscripcionesEventoRoutes );
app.use('/api/eventoM-popular',EventoMPopularRoutes);
const PORT = process.env.PORT;

// Iniciar servidor y sincronizar base de datos
let startDB = async() => {
  try {
    await sequelize.sync();
    console.log('Base de datos sincronizada');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en: ${PORT}`);
    });
  } catch (e) {
    console.log("Error al conectar con la base de datos");
  }
};
startDB();
