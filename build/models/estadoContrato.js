"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_1 = __importDefault(require("../database/mysql"));
class EstadoContrato extends sequelize_1.Model {
}
EstadoContrato.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    estado_contrato: sequelize_1.DataTypes.STRING,
    estado_contrato_descripcion: sequelize_1.DataTypes.STRING
}, {
    sequelize: mysql_1.default,
    modelName: 'estados_contratos',
    timestamps: false
});
exports.default = EstadoContrato;
