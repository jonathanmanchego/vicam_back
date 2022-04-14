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
    solicitud_fecha: DataTypes.DATEONLY,
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
//FK's

Solicitud.belongsTo(EstadoSolicitud,{as:'estado_solicitud',foreignKey:'estado_solicitud_id'});
EstadoSolicitud.hasMany(Solicitud, { as: 'solicitud', foreignKey: 'estado_solicitud_id' });

Solicitud.belongsTo(CuentaAhorro, { as: 'cuenta_ahorro', foreignKey: 'cuenta_ahorro_id' });
CuentaAhorro.hasMany(Solicitud, { as: 'solicitud', foreignKey: 'cuenta_ahorro_id' });

Solicitud.belongsTo(Tarjeta, { as: 'tarjeta', foreignKey: 'tarjeta_id' });
Tarjeta.hasMany(Solicitud, { as: 'solicitud', foreignKey: 'tarjeta_id' });

Solicitud.belongsTo(Prestamista, { as: 'prestamista', foreignKey: 'prestamista_id' });
Prestamista.hasMany(Solicitud, { as: 'solicitud', foreignKey: 'prestamista_id' });

Solicitud.belongsTo(Banco, { as: 'banco', foreignKey: 'banco_id' });
Banco.hasMany(Solicitud, { as: 'solicitud', foreignKey: 'banco_id' });

Solicitud.belongsTo(PlazoPago, { as: 'plazo_pago', foreignKey: 'plazo_pago_id' });
PlazoPago.hasMany(Solicitud, { as: 'solicitud', foreignKey: 'plazo_pago_id' });

Solicitud.belongsTo(Empleado, { as: 'empleado', foreignKey: 'empleado_id' });
Empleado.hasMany(Solicitud, { as: 'solicitud', foreignKey: 'empleado_id' });

// EstadoSolicitud.hasMany(Solicitud,{foreignKey:"estado_solicitud_id"});
// Prestamista.hasMany(Solicitud,{foreignKey:"prestamista_id"});

// Solicitud.belongsTo(Prestamista,{foreignKey:"prestamista_id"});
// Solicitud.belongsTo(CuentaAhorro,{foreignKey:"cuenta_ahorro_id"});
// Solicitud.belongsTo(Banco,{foreignKey:"banco_id"});
// Solicitud.belongsTo(EstadoSolicitud);
// Solicitud.belongsTo(CuentaAhorro,{foreignKey:"cuenta_ahorro_id"});
// Solicitud.belongsTo(Tarjeta,{foreignKey:"tarjeta_id"});
// Solicitud.belongsTo(Prestamista,{foreignKey:"prestamista_id"});
// Solicitud.belongsTo(Banco,{foreignKey:"banco_id"});
// Solicitud.belongsTo(PlazoPago,{foreignKey:"plazo_pago_id"});
// Solicitud.belongsTo(Empleado,{foreignKey:"empleado_id"});

export default Solicitud;