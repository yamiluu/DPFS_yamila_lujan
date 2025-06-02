'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    static associate(models) {
      // Relación: una categoría tiene muchos productos.
      category.hasMany(models.product, {
        foreignKey: 'id_categoria'
      });
    }
  }
  category.init({
    id_categoria: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    categoria: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'category',
  });
  return category;
};
