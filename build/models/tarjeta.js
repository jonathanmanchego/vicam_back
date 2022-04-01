"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_1 = __importDefault(require("../database/mysql"));
class Tarjeta extends sequelize_1.Model {
}
Tarjeta.init({
    tarjeta_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    prestamista_id: sequelize_1.DataTypes.INTEGER,
    banco_id: sequelize_1.DataTypes.INTEGER,
    tarjeta_num: sequelize_1.DataTypes.STRING
}, {
    sequelize: mysql_1.default,
    modelName: 'tarjetas',
    timestamps: false
});
exports.default = Tarjeta;
