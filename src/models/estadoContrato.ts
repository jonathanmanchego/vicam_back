import { Model, DataTypes } from "sequelize";
import sequelize from "../database/mysql";

class EstadoContrato extends Model{ }

EstadoContrato.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    estado_contrato: DataTypes.STRING,
    estado_contrato_descripcion: DataTypes.STRING
}, {
    sequelize,
    modelName: 'estados_contratos',
    timestamps: false
});

export default EstadoContrato;