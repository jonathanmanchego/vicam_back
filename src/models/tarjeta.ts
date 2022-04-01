import { Model, DataTypes } from "sequelize";
import sequelize from "../database/mysql";

class Tarjeta extends Model{ }

Tarjeta.init({
    tarjeta_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    prestamista_id: DataTypes.INTEGER,
    banco_id: DataTypes.INTEGER,
    tarjeta_num: DataTypes.STRING
}, {
    sequelize,
    modelName: 'tarjetas',
    timestamps: false
});

export default Tarjeta;