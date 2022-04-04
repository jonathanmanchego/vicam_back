import { Model, DataTypes } from "sequelize";
import sequelize from "../database/mysql";

class Pago extends Model{ }

Pago.init({
    pago_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    plazo_pago_id:DataTypes.INTEGER,
    prestamista_id: DataTypes.INTEGER,
    contrato_id: DataTypes.INTEGER,
    pago_numero: DataTypes.STRING,
    pago_fecha_inicio: DataTypes.DATE,
    pago_fecha_fin: DataTypes.DATE,
    pago_monto_capital: DataTypes.DECIMAL,
    pago_monto_interes: DataTypes.DECIMAL,
    pago_tasa_interes: DataTypes.DECIMAL
}, {
    sequelize,
    modelName: 'pagos',
    timestamps: false
});

export default Pago;