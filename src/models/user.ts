import { Model, DataTypes, ForeignKeyConstraintError } from "sequelize";
import sequelize from "../database/mysql";
import Prestamista from "./prestamista";
import Empleado from "./empleado";

class User extends Model{ }

User.init({
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_nick: DataTypes.STRING,
    user_password:DataTypes.STRING
}, {
    sequelize,
    modelName: 'users',
    // timestamps: false
});

User.hasOne(Prestamista, { as:"prestamista",foreignKey: "user_id" });
User.hasOne(Empleado, { as:"empleado",foreignKey: "user_id" });

export default User;