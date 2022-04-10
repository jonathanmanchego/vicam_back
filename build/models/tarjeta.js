"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_1 = __importDefault(require("../database/mysql"));
const cuentaAhorro_1 = __importDefault(require("./cuentaAhorro"));
class Tarjeta extends sequelize_1.Model {
}
Tarjeta.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    prestamista_id: sequelize_1.DataTypes.INTEGER,
    banco_id: sequelize_1.DataTypes.INTEGER,
    tipo_tarjeta_id: sequelize_1.DataTypes.INTEGER,
    tarjeta_num: sequelize_1.DataTypes.STRING
}, {
    sequelize: mysql_1.default,
    modelName: 'tarjetas',
    timestamps: false
});
Tarjeta.hasMany(cuentaAhorro_1.default, { as: "cuenta_ahorro", foreignKey: "tarjeta_id" });
// CuentaAhorro.belongsTo(Tarjeta);asd
cuentaAhorro_1.default.belongsTo(Tarjeta, { foreignKey: "tarjeta_id" });
exports.default = Tarjeta;
