"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_1 = __importDefault(require("../database/mysql"));
const banco_1 = __importDefault(require("./banco"));
const prestamista_1 = __importDefault(require("./prestamista"));
const tipoTarjeta_1 = __importDefault(require("./tipoTarjeta"));
class Tarjeta extends sequelize_1.Model {
}
Tarjeta.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    prestamista_id: sequelize_1.DataTypes.INTEGER,
    banco_id: sequelize_1.DataTypes.INTEGER,
    tipo_tarjeta_id: sequelize_1.DataTypes.INTEGER,
    tarjeta_num: sequelize_1.DataTypes.STRING,
}, {
    sequelize: mysql_1.default,
    modelName: "tarjetas",
    timestamps: false,
});
//FK
Tarjeta.belongsTo(banco_1.default, { as: 'banco', foreignKey: 'banco_id' });
banco_1.default.hasMany(Tarjeta, { as: 'tarjeta', foreignKey: 'banco_id' });
Tarjeta.belongsTo(prestamista_1.default, { as: 'prestamista', foreignKey: 'prestamista_id' });
prestamista_1.default.hasMany(Tarjeta, { as: 'tarjeta', foreignKey: 'tarjeta_id' });
Tarjeta.belongsTo(tipoTarjeta_1.default, { as: 'tipo_tarjeta', foreignKey: 'tipo_tarjeta_id' });
tipoTarjeta_1.default.hasMany(Tarjeta, { as: 'tarjeta', foreignKey: 'tipo_tarjeta_id' });
// Tarjeta.hasMany(CuentaAhorro, {
//   as: "cuenta_ahorro",
//   foreignKey: "tarjeta_id",
// });
// Tarjeta.belongsTo(TipoTarjeta, { foreignKey: "tipo_tarjeta_id" });
// // CuentaAhorro.belongsTo(Tarjeta);asd
// CuentaAhorro.belongsTo(Tarjeta, { foreignKey: "tarjeta_id" });
exports.default = Tarjeta;
