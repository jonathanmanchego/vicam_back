"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_1 = __importDefault(require("../database/mysql"));
const prestamista_1 = __importDefault(require("./prestamista"));
const empleado_1 = __importDefault(require("./empleado"));
class User extends sequelize_1.Model {
}
User.init({
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_nick: sequelize_1.DataTypes.STRING,
    user_password: sequelize_1.DataTypes.STRING
}, {
    sequelize: mysql_1.default,
    modelName: 'users',
    // timestamps: false
});
User.hasOne(prestamista_1.default, { as: "prestamista", foreignKey: "user_id" });
User.hasOne(empleado_1.default, { as: "empleado", foreignKey: "user_id" });
exports.default = User;
