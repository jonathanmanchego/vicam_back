import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/mysql';

class Prestamista extends Model { }

Prestamista.init({
    id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    prestamista_codigo: DataTypes.STRING,
    prestamista_nombres: DataTypes.STRING,
    prestamista_apellidos: DataTypes.STRING,
    prestamista_dni: DataTypes.STRING,
    prestamista_celular1:DataTypes.STRING,
    prestamista_celular2:DataTypes.STRING,
    prestamista_telefono:DataTypes.STRING,
    prestamista_correo:DataTypes.STRING,
    prestamista_password:DataTypes.STRING,
    prestamista_direccion:DataTypes.STRING
}, {
    sequelize,
    modelName: 'prestamistas',
    timestamps: false
});

export default Prestamista;