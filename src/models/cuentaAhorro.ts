import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/mysql';
import Banco from './banco';
import Prestamista from './prestamista';
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
//FK's
CuentaAhorro.belongsTo(Tarjeta, { as: 'tarjeta', foreignKey: 'tarjeta_id' });
Tarjeta.hasMany(CuentaAhorro, { as: 'cuenta_ahorro', foreignKey: 'tarjeta_id' });

CuentaAhorro.belongsTo(Prestamista, { as: 'prestamista', foreignKey: 'prestamista_id' });
Prestamista.hasMany(CuentaAhorro, { as: 'cuenta_ahorro', foreignKey: 'prestamista_id' });

CuentaAhorro.belongsTo(Banco, { as: 'banco', foreignKey: 'banco_id' });
Banco.hasMany(CuentaAhorro, { as: 'cuenta_ahorro', foreignKey: 'banco_id' });

export default CuentaAhorro;