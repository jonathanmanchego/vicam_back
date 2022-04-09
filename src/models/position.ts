import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/mysql';

// import Company from './company';

class Position extends Model{}
Position.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        company_id: DataTypes.INTEGER,
        position_name: DataTypes.STRING,
        position_description: DataTypes.STRING,
        state_db: DataTypes.INTEGER,
    },
    {
        sequelize,
        modelName:'positions'
    }
);

// Company.hasMany(Position,{ foreignKey:'company_id'});
// Position.belongsTo(Company, { foreignKey:'company_id'});

export default Position;