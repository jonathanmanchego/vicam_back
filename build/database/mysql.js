"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('dbvicam', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
// sequelize.authenticate().then(() => {
//     console.log("conexión DB ok");
// }).catch(error => {
//     console.log("error:",error);
// });
exports.default = sequelize;
