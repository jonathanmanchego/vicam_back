import { Model, DataTypes } from "sequelize";
import sequelize from "../database/mysql";
import CuentaAhorro from "./cuentaAhorro";

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

Tarjeta.hasMany(CuentaAhorro, { as: "cuenta_ahorro", foreignKey: "tarjeta_id" });
// CuentaAhorro.belongsTo(Tarjeta);
CuentaAhorro.belongsTo(Tarjeta,{foreignKey:"tarjeta_id"});


export default Tarjeta;