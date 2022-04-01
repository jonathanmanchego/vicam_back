"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_1 = __importDefault(require("../database/mysql"));
class CuentaAhorro extends sequelize_1.Model {
}
CuentaAhorro.init({
    cuenta_ahorro_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tarjeta_id: sequelize_1.DataTypes.INTEGER,
    prestamista_id: sequelize_1.DataTypes.INTEGER,
    banco_id: sequelize_1.DataTypes.INTEGER,
    cuenta_numero: sequelize_1.DataTypes.STRING
}, {
    sequelize: mysql_1.default,
    modelName: 'cuentas_ahorros',
    timestamps: false
});
exports.default = CuentaAhorro;
