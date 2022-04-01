import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/mysql';
import db from '../database';

class Company extends Model{ }

Company.init({
    company_id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    company_name: DataTypes.STRING,
    company_address: DataTypes.STRING,
    // company_ruc: DataTypes.STRING,
    company_telf1:DataTypes.STRING,
    company_telf2: DataTypes.STRING,
    company_telf3:DataTypes.STRING
}, {
    sequelize,
    modelName: 'companies',
    timestamps: false
});

export default Company;