import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/mysql';
import Tarjeta from './tarjeta';

class CuentaAhorro extends Model { }

CuentaAhorro.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tarjeta_id: DataTypes.INTEGER,
    prestamista_id: DataTypes.INTEGER,
    banco_id: DataTypes.INTEGER,
    cuenta_numero:DataTypes.STRING
}, {
    sequelize,
    modelName: 'cuentas_ahorros',
    timestamps: false
});


export default CuentaAhorro;