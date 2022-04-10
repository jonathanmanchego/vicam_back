import { Model, DataTypes } from "sequelize";
import sequelize from "../database/mysql";
import CuentaAhorro from "./cuentaAhorro";
import Tarjeta from "./tarjeta";

class TipoTarjeta extends Model {}

TipoTarjeta.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tipo_tarjeta: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "tipos_tarjetas",
    timestamps: false,
  }
);

// TipoTarjeta.hasMany(Tarjeta, { as: "tarjeta", foreignKey: "tipo_tarjeta_id" });
// CuentaAhorro.belongsTo(Tarjeta);
// CuentaAhorro.belongsTo(Tarjeta,{foreignKey:"tarjeta_id"});

export default TipoTarjeta;
