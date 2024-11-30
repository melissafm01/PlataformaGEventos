const { DataTypes } = require('sequelize');
const sequelize = require('../config/dataBase'); // Asegúrate de tener la configuración de tu base de datos en este archivo

const Evento = sequelize.define(
  'Evento', 
  {
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
   
    fecha_hora: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    lugar: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    capacidad_maxima: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',

  }
);

module.exports = Evento;
