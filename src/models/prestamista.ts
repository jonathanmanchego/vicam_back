import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/mysql';
import Localia from './localia';

class Prestamista extends Model { }

Prestamista.init({
    id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    user_id: DataTypes.INTEGER,
    localia_id: DataTypes.INTEGER,
    provincia_id: DataTypes.INTEGER,
    departamento_id: DataTypes.INTEGER,
    pais_id: DataTypes.INTEGER,
    prestamista_codigo: DataTypes.STRING,
    prestamista_nombres: DataTypes.STRING,
    prestamista_apellidos: DataTypes.STRING,
    prestamista_dni: DataTypes.STRING,
    prestamista_celular1:DataTypes.STRING,
    prestamista_celular2:DataTypes.STRING,
    prestamista_telefono:DataTypes.STRING,
    prestamista_correo:DataTypes.STRING,
    prestamista_password:DataTypes.STRING,
    prestamista_direccion: DataTypes.STRING
}, {
    sequelize,
    modelName: 'prestamistas',
    timestamps: false
});
//FK
Prestamista.belongsTo(Localia, { as: 'localia', foreignKey: 'localia_id' });
Localia.hasMany(Prestamista, { as: 'prestamistas', foreignKey: 'localia_id' });
export default Prestamista;