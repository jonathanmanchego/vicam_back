"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_1 = __importDefault(require("../database/mysql"));
class PlazoPago extends sequelize_1.Model {
}
PlazoPago.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    plazo_pago_meses: sequelize_1.DataTypes.INTEGER,
    plazo_pago_tasa_interes: sequelize_1.DataTypes.DECIMAL,
    plazo_pago_anios: sequelize_1.DataTypes.DECIMAL
}, {
    sequelize: mysql_1.default,
    modelName: 'plazos_pagos',
    timestamps: false
});
exports.default = PlazoPago;
