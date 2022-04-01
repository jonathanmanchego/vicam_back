import { Model, DataTypes } from "sequelize";
import sequelize from "../database/mysql";

class Banco extends Model{ }
Banco.init({
    banco_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    banco_name: DataTypes.STRING
}, {
    sequelize,
    modelName: 'bancos',
    timestamps: true
});
export default Banco;