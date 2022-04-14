import { Model, DataTypes } from "sequelize";
import sequelize from "../database/mysql";

class TipoLocalias extends Model{ }

TipoLocalias.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo_localia: DataTypes.STRING
}, {
    sequelize,
    modelName: 'tipos_localias',
    timestamps: false
});

export default TipoLocalias;