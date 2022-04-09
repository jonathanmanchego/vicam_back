import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/mysql';

class EstadoSolicitud extends Model { }

EstadoSolicitud.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    estado_solicitud: DataTypes.STRING,
    estado_solicitud_descripcion:DataTypes.STRING
}, {
    sequelize,
    modelName: 'estados_solicitudes',
    timestamps: false
});

export default EstadoSolicitud;