"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_1 = __importDefault(require("../database/mysql"));
class Solicitud extends sequelize_1.Model {
}
Solicitud.init({
    solicitud_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    estado_solicitud_id: sequelize_1.DataTypes.INTEGER,
    cuenta_ahorro_id: sequelize_1.DataTypes.INTEGER,
    tarjeta_id: sequelize_1.DataTypes.INTEGER,
    prestamista_id: sequelize_1.DataTypes.INTEGER,
    banco_id: sequelize_1.DataTypes.INTEGER,
    solicitud_numero: sequelize_1.DataTypes.STRING,
    solicitud_fecha: sequelize_1.DataTypes.DATE,
    solicitud_numero_deposito: sequelize_1.DataTypes.STRING,
    solicitud_boucher: sequelize_1.DataTypes.STRING
}, {
    sequelize: mysql_1.default,
    modelName: 'solicitudes',
    timestamps: false
});
exports.default = Solicitud;
