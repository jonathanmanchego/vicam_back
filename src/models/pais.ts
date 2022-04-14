import { Model, DataTypes } from "sequelize";
import sequelize from "../database/mysql";

class Pais extends Model{ }

Pais.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pais: DataTypes.STRING
}, {
    sequelize,
    modelName: 'paises',
    timestamps: false
});

export default Pais;