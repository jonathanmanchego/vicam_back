import { Model, DataTypes } from "sequelize";
import sequelize from "../database/mysql";

class Empleado extends Model{ }

Empleado.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rol_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    empleado_nombres: DataTypes.STRING,
    empleado_apellidos: DataTypes.STRING,
    empleado_dni: DataTypes.STRING
}, {
    sequelize,
    modelName: 'empleados',
    timestamps: false
});

export default Empleado;