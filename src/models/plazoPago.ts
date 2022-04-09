import { Model, DataTypes } from "sequelize";
import sequelize from "../database/mysql";

class PlazoPago extends Model{ }

PlazoPago.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    plazo_pago_meses: DataTypes.INTEGER,
    plazo_pago_tasa_interes: DataTypes.DECIMAL,
    plazo_pago_anios: DataTypes.DECIMAL
}, {
    sequelize,
    modelName: 'plazos_pagos',
    timestamps: false
});

export default PlazoPago;