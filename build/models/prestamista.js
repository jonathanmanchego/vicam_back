"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_1 = __importDefault(require("../database/mysql"));
const departamento_1 = __importDefault(require("./departamento"));
const localia_1 = __importDefault(require("./localia"));
const pais_1 = __importDefault(require("./pais"));
const provincia_1 = __importDefault(require("./provincia"));
class Prestamista extends sequelize_1.Model {
}
Prestamista.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: sequelize_1.DataTypes.INTEGER,
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
Prestamista.belongsTo(localia_1.default, { as: 'localia', foreignKey: 'localia_id' });
localia_1.default.hasMany(Prestamista, { as: 'prestamista', foreignKey: 'localia_id' });
Prestamista.belongsTo(provincia_1.default, { as: 'provincia', foreignKey: 'provincia_id' });
provincia_1.default.hasMany(Prestamista, { as: 'prestamista', foreignKey: 'provincia_id' });
Prestamista.belongsTo(departamento_1.default, { as: 'departamento', foreignKey: 'departamento_id' });
departamento_1.default.hasMany(Prestamista, { as: 'prestamista', foreignKey: 'departamento_id' });
Prestamista.belongsTo(pais_1.default, { as: 'pais', foreignKey: 'pais_id' });
pais_1.default.hasMany(Prestamista, { as: 'prestamista', foreignKey: 'pais_id' });
exports.default = Prestamista;
