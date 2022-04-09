import { Model, DataTypes } from "sequelize";
import sequelize from "../database/mysql";

class Banco extends Model{ }
Banco.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    banco_name: DataTypes.STRING
}, {
    sequelize,
    modelName: 'bancos',
    timestamps: false
});
export default Banco;