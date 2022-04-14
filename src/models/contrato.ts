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
    contrato_fecha: DataTypes.DATEONLY,
    contrato_url_file: DataTypes.STRING,
    contrato_numero: DataTypes.STRING,
    contrato_monto_prestamo: DataTypes.DECIMAL,
    contrato_monto_interes: DataTypes.DECIMAL,
    contrato_monto_total_pago: DataTypes.DECIMAL,
    contrato_fecha_deposito: DataTypes.DATEONLY,
    contrato_dias_prestamo: DataTypes.INTEGER,
    contrato_dia_inicio: DataTypes.DATEONLY,
    contrato_dia_fin: DataTypes.DATEONLY
}, {
    sequelize,
    modelName: 'contratos',
    timestamps: false
});
//FK's
Contrato.belongsTo(Solicitud, { as: 'solicitud', foreignKey: "solicitud_id" });
Solicitud.hasMany(Contrato, { as: 'contrato', foreignKey: "solicitud_id" });

Contrato.belongsTo(Prestamista, { as: 'prestamista', foreignKey: "prestamista_id" });
Prestamista.hasMany(Contrato, { as: 'contrato', foreignKey: "prestamista_id" });

Contrato.belongsTo(EstadoContrato, { as: 'estado_contrato', foreignKey: "estado_contrato_id" });
EstadoContrato.hasMany(Contrato, { as: 'contrato', foreignKey: "estado_contrato_id" });


export default Contrato;