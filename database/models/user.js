'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      // Relación: un usuario tiene muchos pedidos.
      user.hasMany(models.order, {
        foreignKey: 'user_email',
        sourceKey: 'email'
      });
    }
  }

  user.init({
    nombre: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    password: DataTypes.STRING,
    tipo_usuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });

  return user;
};
