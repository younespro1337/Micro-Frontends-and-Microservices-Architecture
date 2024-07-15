// // models/Order.js
// const { DataTypes } = require('sequelize');
// const sequelize = require('../database/connectDatabase');
// 
// const Order = sequelize.define('Order', {
//   orderId: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   userId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   product: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   quantity: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   totalPrice: {
//     type: DataTypes.FLOAT,
//     allowNull: false,
//   }
// }, {
//   tableName: 'Orders',
// });
// 
// module.exports = Order;
