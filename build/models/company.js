"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_1 = __importDefault(require("../database/mysql"));
class Company extends sequelize_1.Model {
}
Company.init({
    company_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    company_name: sequelize_1.DataTypes.STRING,
    company_address: sequelize_1.DataTypes.STRING,
    // company_ruc: DataTypes.STRING,
    company_telf1: sequelize_1.DataTypes.STRING,
    company_telf2: sequelize_1.DataTypes.STRING,
    company_telf3: sequelize_1.DataTypes.STRING
}, {
    sequelize: mysql_1.default,
    modelName: 'companies',
    timestamps: false
});
exports.default = Company;
