const { DataTypes } = require('sequelize');
const sequelize = require('../config/dataBase'); // Asegúrate de tener la configuración de tu base de datos

const Usuario = sequelize.define(
  'Usuario', 
  {
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true, // 
    },
    rol: {
      type: DataTypes.ENUM('usuario', 'admin'),
      defaultValue: 'usuario', 
    },
  },
  {
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',

  }
);

module.exports = Usuario;
