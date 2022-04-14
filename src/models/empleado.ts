import { Model, DataTypes } from "sequelize";
import sequelize from "../database/mysql";
import Rol from "./rol";
import User from "./user";

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
//FK's
Empleado.belongsTo(Rol, { as: 'rol', foreignKey: 'rol_id' });
Rol.hasMany(Empleado, { as: 'empleado', foreignKey: 'rol_id' });

// Empleado.belongsTo(User, { as: 'user', foreignKey: 'user_id' });
// User.hasMany(Empleado, { as: 'empleado', foreignKey: 'user_id' });


export default Empleado;