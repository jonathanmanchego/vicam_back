"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_1 = __importDefault(require("../database/mysql"));
class Prestamista extends sequelize_1.Model {
}
Prestamista.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    localia_id: sequelize_1.DataTypes.INTEGER,
    provincia_id: sequelize_1.DataTypes.INTEGER,
    departamento_id: sequelize_1.DataTypes.INTEGER,
    pais_id: sequelize_1.DataTypes.INTEGER,
    prestamista_codigo: sequelize_1.DataTypes.STRING,
    prestamista_nombres: sequelize_1.DataTypes.STRING,
    prestamista_apellidos: sequelize_1.DataTypes.STRING,
    prestamista_dni: sequelize_1.DataTypes.STRING,
    prestamista_celular1: sequelize_1.DataTypes.STRING,
    prestamista_celular2: sequelize_1.DataTypes.STRING,
    prestamista_telefono: sequelize_1.DataTypes.STRING,
    prestamista_correo: sequelize_1.DataTypes.STRING,
    prestamista_password: sequelize_1.DataTypes.STRING,
    prestamista_direccion: sequelize_1.DataTypes.STRING
}, {
    sequelize: mysql_1.default,
    modelName: 'prestamistas',
    timestamps: false
});
//FK
exports.default = Prestamista;
