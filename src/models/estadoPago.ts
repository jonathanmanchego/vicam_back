import { Model, DataTypes } from "sequelize";
import sequelize from "../database/mysql";

class EstadoPago extends Model{ }

EstadoPago.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ep_estado: DataTypes.STRING,
    ep_descripcion: DataTypes.STRING
}, {
    sequelize,
    modelName: 'detalles_pagos',
    timestamps: false
});

export default EstadoPago;