'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    static associate(models) {
      // Relación: cada producto pertenece a una categoría.
      product.belongsTo(models.category, {
        foreignKey: 'id_categoria'
      });

      // Relación: un producto puede estar en muchos detalles de pedido.
      product.hasMany(models.order_detail, {
        foreignKey: 'id_producto'
      });
    }
  }
  product.init({
    id_producto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    precio: DataTypes.DECIMAL,
    talle: DataTypes.STRING,
    color: DataTypes.STRING,
    id_categoria: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};
