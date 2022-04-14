import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/mysql';
import EstadoContrato from './estadoContrato';
import Prestamista from './prestamista';
import Solicitud from './solicitud';

class Contrato extends Model { }

Contrato.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    prestamista_id: DataTypes.INTEGER,
    estado_contrato_id: DataTypes.INTEGER,
    solicitud_id: DataTypes.INTEGER,
    contrato_fecha: DataTypes.DATE,
    contrato_url_file: DataTypes.STRING,
    contrato_numero: DataTypes.STRING,
    contrato_monto_prestamo: DataTypes.DECIMAL,
    contrato_monto_interes: DataTypes.DECIMAL,
    contrato_monto_total_pago: DataTypes.DECIMAL,
    contrato_fecha_deposito: DataTypes.DATE,
    contrato_dias_prestamo: DataTypes.INTEGER,
    contrato_dia_inicio: DataTypes.DATE,
    contrato_dia_fin: DataTypes.DATE
}, {
    sequelize,
    modelName: 'contratos',
    timestamps: false
});

Contrato.belongsTo(Solicitud, { foreignKey: "solicitud_id" });
Contrato.belongsTo(Prestamista, { foreignKey: "prestamista_id" });
Contrato.belongsTo(EstadoContrato, { foreignKey: "estado_contrato_id" });


export default Contrato;