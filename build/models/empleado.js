"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_1 = __importDefault(require("../database/mysql"));
class Empleado extends sequelize_1.Model {
}
Empleado.init({
    empleado_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rol_id: sequelize_1.DataTypes.INTEGER,
    user_id: sequelize_1.DataTypes.INTEGER,
    empleado_nombres: sequelize_1.DataTypes.STRING,
    empleado_apellidos: sequelize_1.DataTypes.STRING,
    empleado_dni: sequelize_1.DataTypes.STRING
}, {
    sequelize: mysql_1.default,
    modelName: 'empleados',
    timestamps: false
});
exports.default = Empleado;
