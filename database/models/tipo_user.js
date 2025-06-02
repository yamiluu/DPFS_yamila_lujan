'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipo_user extends Model {
    static associate(models) {
      // Un tipo de usuario (tipo_user) tiene muchos usuarios.
      tipo_user.hasMany(models.user, {
        foreignKey: 'tipo_usuario'
      });
    }
  }
  tipo_user.init({
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tipo_usuario: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tipo_user',
  });
  return tipo_user;
};
