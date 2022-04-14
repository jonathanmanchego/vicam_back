import { Model, DataTypes } from "sequelize";
import sequelize from "../database/mysql";

class Departamento extends Model{ }

Departamento.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pais_id: DataTypes.INTEGER,
    departamento: DataTypes.STRING
}, {
    sequelize,
    modelName: 'departamentos',
    timestamps: false
});

export default Departamento;