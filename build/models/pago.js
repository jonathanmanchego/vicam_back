"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_1 = __importDefault(require("../database/mysql"));
class Pago extends sequelize_1.Model {
}
Pago.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    plazo_pago_id: sequelize_1.DataTypes.INTEGER,
    prestamista_id: sequelize_1.DataTypes.INTEGER,
    contrato_id: sequelize_1.DataTypes.INTEGER,
    pago_numero: sequelize_1.DataTypes.STRING,
    pago_fecha_inicio: sequelize_1.DataTypes.DATE,
    pago_fecha_fin: sequelize_1.DataTypes.DATE,
    pago_monto_capital: sequelize_1.DataTypes.DECIMAL,
    pago_monto_interes: sequelize_1.DataTypes.DECIMAL,
    pago_tasa_interes: sequelize_1.DataTypes.DECIMAL
}, {
    sequelize: mysql_1.default,
    modelName: 'pagos',
    timestamps: false
});
exports.default = Pago;
