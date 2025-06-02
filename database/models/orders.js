'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    static associate(models) {
      // Un pedido pertenece a un usuario
      order.belongsTo(models.user, {
        foreignKey: 'email'
      });

      // Un pedido tiene muchos detalles
      order.hasMany(models.order_detail, {
        foreignKey: 'id_orden'
      });
    }
  }
  order.init({
    id_orden: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fecha_orden: DataTypes.DATE,
    estado: DataTypes.STRING,
    total: DataTypes.DECIMAL,
    envio_direccion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};
