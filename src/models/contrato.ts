import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/mysql';

class Contrato extends Model { }

Contrato.init({
    contrato_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    prestamista_id: DataTypes.INTEGER,
    solicitud_id: DataTypes.INTEGER,
    contrato_fecha: DataTypes.DATE,
    contrato_url_file: DataTypes.STRING
}, {
    sequelize,
    modelName: 'contratos',
    timestamps: false
});

export default Contrato;