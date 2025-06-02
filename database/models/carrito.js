'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class carrito extends Model {
    static associate(models) {
      // Un carrito pertenece a un usuario.
      carrito.belongsTo(models.user, {
        foreignKey: 'email'
      });

      // Un carrito tiene muchos productos (a través del detalle del carrito)
      carrito.hasMany(models.carrito_detalle, {
        foreignKey: 'id_carrito'
      });
    }
  }
  carrito.init({
    id_carrito: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: DataTypes.STRING,
    fecha_creacion: DataTypes.TIME,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'carrito',
  });
  return carrito;
};
