import { Model, DataTypes } from "sequelize";
import sequelize from "../database/mysql";

class DetallePago extends Model{ }

DetallePago.init({
    dp_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pago_id: DataTypes.INTEGER,
    ep_id: DataTypes.INTEGER,
    dp_monto_capital: DataTypes.DECIMAL,
    dp_fecha_limite: DataTypes.DATE,
    dp_monto_interes: DataTypes.DECIMAL,
    dp_monto_penalidad: DataTypes.DECIMAL,
}, {
    sequelize,
    modelName: 'detalles_pagos',
    timestamps: false
});

export default DetallePago;