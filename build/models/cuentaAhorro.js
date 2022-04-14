"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_1 = __importDefault(require("../database/mysql"));
const banco_1 = __importDefault(require("./banco"));
const prestamista_1 = __importDefault(require("./prestamista"));
const tarjeta_1 = __importDefault(require("./tarjeta"));
class CuentaAhorro extends sequelize_1.Model {
}
CuentaAhorro.init({
    id: {
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
//FK's
CuentaAhorro.belongsTo(tarjeta_1.default, { as: 'tarjeta', foreignKey: 'tarjeta_id' });
tarjeta_1.default.hasMany(CuentaAhorro, { as: 'cuenta_ahorro', foreignKey: 'tarjeta_id' });
CuentaAhorro.belongsTo(prestamista_1.default, { as: 'prestamista', foreignKey: 'prestamista_id' });
prestamista_1.default.hasMany(CuentaAhorro, { as: 'cuenta_ahorro', foreignKey: 'cuenta_ahorro_id' });
CuentaAhorro.belongsTo(banco_1.default, { as: 'banco', foreignKey: 'banco_id' });
banco_1.default.hasMany(CuentaAhorro, { as: 'cuenta_ahorro', foreignKey: 'banco_id' });
exports.default = CuentaAhorro;
