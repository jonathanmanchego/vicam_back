import { Model, DataTypes } from "sequelize";
import sequelize from "../database/mysql";
import EstadoPago from "./estadoPago";
import Pago from "./pago";

class DetallePago extends Model{ }

DetallePago.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pago_id: DataTypes.INTEGER,
    ep_id: DataTypes.INTEGER,
    dp_numero: DataTypes.STRING,
    dp_monto_capital: DataTypes.DECIMAL,
    dp_fecha_limite: DataTypes.DATEONLY,
    dp_monto_interes: DataTypes.DECIMAL,
    dp_monto_penalidad: DataTypes.DECIMAL,
}, {
    sequelize,
    modelName: 'detalles_pagos',
    timestamps: false
});
//FK's
DetallePago.belongsTo(Pago, { as: 'pago', foreignKey: 'pago_id' });
Pago.hasMany(DetallePago, { as: 'detalle_pago', foreignKey: 'pago_id' });

DetallePago.belongsTo(EstadoPago, { as: 'estado_pago', foreignKey: 'ep_id' });
EstadoPago.hasMany(DetallePago, { as: 'detalle_pago', foreignKey: 'ep_id' });

export default DetallePago;