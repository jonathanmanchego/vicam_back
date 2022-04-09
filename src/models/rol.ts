import { Model, DataTypes } from "sequelize";
import sequelize from "../database/mysql";

class Rol extends Model{ }

Rol.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rol: DataTypes.STRING,
    rol_descripcion: DataTypes.STRING
}, {
    sequelize,
    modelName: 'roles',
    timestamps: false
});

export default Rol;