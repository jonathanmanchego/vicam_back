import { Model, DataTypes } from "sequelize";
import sequelize from "../database/mysql";

class Provincia extends Model{ }

Provincia.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pais_id: DataTypes.INTEGER,
    departamento_id: DataTypes.INTEGER,
    provincia: DataTypes.STRING
}, {
    sequelize,
    modelName: 'provincias',
    timestamps: false
});

export default Provincia;