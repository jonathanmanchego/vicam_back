"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_1 = __importDefault(require("../database/mysql"));
// import Company from './company';
class Position extends sequelize_1.Model {
}
Position.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    company_id: sequelize_1.DataTypes.INTEGER,
    position_name: sequelize_1.DataTypes.STRING,
    position_description: sequelize_1.DataTypes.STRING,
    state_db: sequelize_1.DataTypes.INTEGER,
}, {
    sequelize: mysql_1.default,
    modelName: 'positions'
});
// Company.hasMany(Position,{ foreignKey:'company_id'});
// Position.belongsTo(Company, { foreignKey:'company_id'});
exports.default = Position;
