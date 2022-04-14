import { Model, DataTypes } from "sequelize";
import sequelize from "../database/mysql";
import Contrato from "./contrato";
import PlazoPago from "./plazoPago";
import Prestamista from "./prestamista";

class Pago extends Model{ }

Pago.init({
    id: {
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
//FK's
Pago.belongsTo(PlazoPago, { as: 'plazo_pago', foreignKey: 'plazo_pago_id' });
PlazoPago.hasMany(Pago, { as: 'pago', foreignKey: 'plazo_pago_id' });

Pago.belongsTo(Prestamista, { as: 'prestamista', foreignKey: 'prestamista_id' });
Prestamista.hasMany(Pago, { as: 'pago', foreignKey: 'prestamista_id' });

Pago.belongsTo(Contrato, { as: 'contrato', foreignKey: 'contrato_id' });
Contrato.hasMany(Pago, { as: 'pago', foreignKey: 'contrato_id' });

export default Pago;