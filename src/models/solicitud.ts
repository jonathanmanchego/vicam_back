import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/mysql';
import EstadoSolicitud from './estadoSolicitud';
import CuentaAhorro from './cuentaAhorro';
import Tarjeta from './tarjeta';
import Prestamista from './prestamista';
import Banco from './banco';
import PlazoPago from './plazoPago';
import Empleado from './empleado';

class Solicitud extends Model { }

Solicitud.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    estado_solicitud_id: DataTypes.INTEGER,
    cuenta_ahorro_id: DataTypes.INTEGER,
    tarjeta_id: DataTypes.INTEGER,
    prestamista_id: DataTypes.INTEGER,
    banco_id: DataTypes.INTEGER,
    plazo_pago_id: DataTypes.INTEGER,
    empleado_id: DataTypes.INTEGER,
    solicitud_numero: DataTypes.STRING,
    solicitud_fecha: DataTypes.DATE,
    solicitud_numero_deposito: DataTypes.STRING,
    solicitud_boucher: DataTypes.STRING,
    solicitud_duracion_meses: DataTypes.INTEGER,
    solicitud_monto: DataTypes.DECIMAL,
    solicitud_tasa_interes_personalizado:DataTypes.DECIMAL
}, {
    sequelize,
    modelName: 'solicitudes',
    timestamps: false
});

EstadoSolicitud.hasMany(Solicitud,{foreignKey:"estado_solicitud_id"});
Prestamista.hasMany(Solicitud,{foreignKey:"prestamista_id"});

Solicitud.belongsTo(Prestamista,{foreignKey:"prestamista_id"});
Solicitud.belongsTo(CuentaAhorro,{foreignKey:"cuenta_ahorro_id"});
Solicitud.belongsTo(Banco,{foreignKey:"banco_id"});
// Solicitud.belongsTo(EstadoSolicitud);
// Solicitud.belongsTo(CuentaAhorro,{foreignKey:"cuenta_ahorro_id"});
// Solicitud.belongsTo(Tarjeta,{foreignKey:"tarjeta_id"});
// Solicitud.belongsTo(Prestamista,{foreignKey:"prestamista_id"});
// Solicitud.belongsTo(Banco,{foreignKey:"banco_id"});
// Solicitud.belongsTo(PlazoPago,{foreignKey:"plazo_pago_id"});
// Solicitud.belongsTo(Empleado,{foreignKey:"empleado_id"});

export default Solicitud;