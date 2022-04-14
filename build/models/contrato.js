"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_1 = __importDefault(require("../database/mysql"));
const estadoContrato_1 = __importDefault(require("./estadoContrato"));
const prestamista_1 = __importDefault(require("./prestamista"));
const solicitud_1 = __importDefault(require("./solicitud"));
class Contrato extends sequelize_1.Model {
}
Contrato.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    prestamista_id: sequelize_1.DataTypes.INTEGER,
    estado_contrato_id: sequelize_1.DataTypes.INTEGER,
    solicitud_id: sequelize_1.DataTypes.INTEGER,
    contrato_fecha: sequelize_1.DataTypes.DATE,
    contrato_url_file: sequelize_1.DataTypes.STRING,
    contrato_numero: sequelize_1.DataTypes.STRING,
    contrato_monto_prestamo: sequelize_1.DataTypes.DECIMAL,
    contrato_monto_interes: sequelize_1.DataTypes.DECIMAL,
    contrato_monto_total_pago: sequelize_1.DataTypes.DECIMAL,
    contrato_fecha_deposito: sequelize_1.DataTypes.DATE,
    contrato_dias_prestamo: sequelize_1.DataTypes.INTEGER,
    contrato_dia_inicio: sequelize_1.DataTypes.DATE,
    contrato_dia_fin: sequelize_1.DataTypes.DATE
}, {
    sequelize: mysql_1.default,
    modelName: 'contratos',
    timestamps: false
});
Contrato.belongsTo(solicitud_1.default, { foreignKey: "solicitud_id" });
Contrato.belongsTo(prestamista_1.default, { foreignKey: "prestamista_id" });
Contrato.belongsTo(estadoContrato_1.default, { foreignKey: "estado_contrato_id" });
exports.default = Contrato;
