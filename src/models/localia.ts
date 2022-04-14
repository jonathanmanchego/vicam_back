import { Model, DataTypes } from "sequelize";
import sequelize from "../database/mysql";

class Localia extends Model{ }

Localia.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    provincia_id: DataTypes.INTEGER,
    departamento_id: DataTypes.INTEGER,
    pais_id: DataTypes.INTEGER,
    tipo_localia_id: DataTypes.INTEGER,
    localia: DataTypes.STRING
}, {
    sequelize,
    modelName: 'localias',
    timestamps: false
});

export default Localia;