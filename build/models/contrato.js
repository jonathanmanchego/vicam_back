"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_1 = __importDefault(require("../database/mysql"));
const banco_1 = __importDefault(require("./banco"));
const cuentaAhorro_1 = __importDefault(require("./cuentaAhorro"));
const estadoContrato_1 = __importDefault(require("./estadoContrato"));
const prestamista_1 = __importDefault(require("./prestamista"));
const solicitud_1 = __importDefault(require("./solicitud"));
const tarjeta_1 = __importDefault(require("./tarjeta"));
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
    cuenta_ahorro_id: sequelize_1.DataTypes.INTEGER,
    tarjeta_id: sequelize_1.DataTypes.INTEGER,
    banco_id: sequelize_1.DataTypes.INTEGER,
    contrato_fecha: sequelize_1.DataTypes.DATEONLY,
    contrato_url_file: sequelize_1.DataTypes.STRING,
    contrato_numero: sequelize_1.DataTypes.STRING,
    contrato_monto_prestamo: sequelize_1.DataTypes.DECIMAL,
    contrato_monto_interes: sequelize_1.DataTypes.DECIMAL,
    contrato_monto_total_pago: sequelize_1.DataTypes.DECIMAL,
    contrato_fecha_deposito: sequelize_1.DataTypes.DATEONLY,
    contrato_dias_prestamo: sequelize_1.DataTypes.INTEGER,
    contrato_dia_inicio: sequelize_1.DataTypes.DATEONLY,
    contrato_dia_fin: sequelize_1.DataTypes.DATEONLY,
    contrato_tasa_interes: sequelize_1.DataTypes.DECIMAL
}, {
    sequelize: mysql_1.default,
    modelName: 'contratos',
    timestamps: false
});
//FK's
Contrato.belongsTo(solicitud_1.default, { as: 'solicitud', foreignKey: "solicitud_id" });
solicitud_1.default.hasMany(Contrato, { as: 'contrato', foreignKey: "solicitud_id" });
Contrato.belongsTo(prestamista_1.default, { as: 'prestamista', foreignKey: "prestamista_id" });
prestamista_1.default.hasMany(Contrato, { as: 'contrato', foreignKey: "prestamista_id" });
Contrato.belongsTo(estadoContrato_1.default, { as: 'estado_contrato', foreignKey: "estado_contrato_id" });
estadoContrato_1.default.hasMany(Contrato, { as: 'contrato', foreignKey: "estado_contrato_id" });
Contrato.belongsTo(cuentaAhorro_1.default, { as: 'cuenta_ahorro', foreignKey: "cuenta_ahorro_id" });
cuentaAhorro_1.default.hasMany(Contrato, { as: 'contrato', foreignKey: "cuenta_ahorro_id" });
Contrato.belongsTo(tarjeta_1.default, { as: 'tarjeta', foreignKey: "tarjeta_id" });
tarjeta_1.default.hasMany(Contrato, { as: 'contrato', foreignKey: 'tarjeta_id' });
Contrato.belongsTo(banco_1.default, { as: 'banco', foreignKey: "banco_id" });
banco_1.default.hasMany(Contrato, { as: 'contrato', foreignKey: "banco_id" });
exports.default = Contrato;
