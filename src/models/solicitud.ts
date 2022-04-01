import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/mysql';

class Solicitud extends Model { }

Solicitud.init({
    solicitud_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    estado_solicitud_id: DataTypes.INTEGER,
    cuenta_ahorro_id: DataTypes.INTEGER,
    tarjeta_id: DataTypes.INTEGER,
    prestamista_id: DataTypes.INTEGER,
    banco_id: DataTypes.INTEGER,
    solicitud_numero: DataTypes.STRING,
    solicitud_fecha: DataTypes.DATE,
    solicitud_numero_deposito: DataTypes.STRING,
    solicitud_boucher:DataTypes.STRING
}, {
    sequelize,
    modelName: 'solicitudes',
    timestamps: false
});

export default Solicitud;