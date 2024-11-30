const { DataTypes } = require('sequelize');
const sequelize = require('../config/dataBase');

const Usuario = require('./usuarioModel');
const Evento = require('./eventoModel');

const Inscripcion = sequelize.define('Inscripcion', {
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Usuario,
      key: 'id'
    }
  },
  evento_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Evento,
      key: 'id'
    }
  },
  inscrito_en: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  estado: {
    type: DataTypes.ENUM('activo', 'cancelado'),  
    defaultValue: 'activo', 
  },
}, {
  timestamps: true
});

// Relacionar los modelos
Usuario.belongsTo(Inscripcion, { foreignKey: 'usuario_id' });
Evento.belongsTo(Inscripcion, { foreignKey: 'evento_id' });

module.exports = Inscripcion;
