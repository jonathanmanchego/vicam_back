"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_1 = __importDefault(require("../database/mysql"));
class Banco extends sequelize_1.Model {
}
Banco.init({
    banco_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    banco_name: sequelize_1.DataTypes.STRING
}, {
    sequelize: mysql_1.default,
    modelName: 'bancos',
    timestamps: true
});
exports.default = Banco;
