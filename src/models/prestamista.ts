import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/mysql';
import Departamento from './departamento';
import Localia from './localia';
import Pais from './pais';
import Provincia from './provincia';

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
Localia.hasMany(Prestamista, { as: 'prestamista', foreignKey: 'localia_id' });

Prestamista.belongsTo(Provincia, { as: 'provincia', foreignKey: 'provincia_id' });
Provincia.hasMany(Prestamista, { as: 'prestamista', foreignKey: 'provincia_id' });

Prestamista.belongsTo(Departamento, { as: 'departamento', foreignKey: 'departamento_id' });
Departamento.hasMany(Prestamista, { as: 'prestamista', foreignKey: 'departamento_id' });

Prestamista.belongsTo(Pais, { as: 'pais', foreignKey: 'pais_id' });
Pais.hasMany(Prestamista, { as: 'prestamista', foreignKey: 'pais_id' });


export default Prestamista;