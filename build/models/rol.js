"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_1 = __importDefault(require("../database/mysql"));
class Rol extends sequelize_1.Model {
}
Rol.init({
    rol_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rol: sequelize_1.DataTypes.STRING,
    rol_descripcion: sequelize_1.DataTypes.STRING
}, {
    sequelize: mysql_1.default,
    modelName: 'roles',
    timestamps: false
});
exports.default = Rol;
