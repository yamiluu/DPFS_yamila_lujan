'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class carrito_detalle extends Model {
    static associate(models) {
      // Un detalle pertenece a un carrito.
      carrito_detalle.belongsTo(models.carrito, {
        foreignKey: 'id_carrito'
      });

      // Un detalle pertenece a un producto.
      carrito_detalle.belongsTo(models.product, {
        foreignKey: 'id_producto'
      });
    }
  }
  carrito_detalle.init({
    id_detalle: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_carrito: DataTypes.INTEGER,
    id_producto: DataTypes.INTEGER,
    color: DataTypes.STRING,
    talle: DataTypes.STRING,
    cantidad: DataTypes.INTEGER,
    precio: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'carrito_detalle',
  });
  return carrito_detalle;
};
