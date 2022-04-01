"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_1 = __importDefault(require("../database/mysql"));
class Contrato extends sequelize_1.Model {
}
Contrato.init({
    contrato_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    prestamista_id: sequelize_1.DataTypes.INTEGER,
    solicitud_id: sequelize_1.DataTypes.INTEGER,
    contrato_fecha: sequelize_1.DataTypes.DATE,
    contrato_url_file: sequelize_1.DataTypes.STRING
}, {
    sequelize: mysql_1.default,
    modelName: 'contratos',
    timestamps: false
});
exports.default = Contrato;
