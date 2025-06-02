'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_detail extends Model {
    static associate(models) {
      // Un detalle pertenece a un pedido
      order_detail.belongsTo(models.order, {
        foreignKey: 'id_orden'
      });

      // Un detalle pertenece a un producto
      order_detail.belongsTo(models.product, {
        foreignKey: 'id_producto'
      });
    }
  }
  order_detail.init({
    id_detalle: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_orden: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    color: DataTypes.STRING,
    talle: DataTypes.STRING,
    cantidad: DataTypes.INTEGER,
    precio: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'order_detail',
  });
  return order_detail;
};
