import { Model, DataTypes } from "sequelize";
import sequelize from "../database/mysql";
import Banco from "./banco";
import CuentaAhorro from "./cuentaAhorro";
import Prestamista from "./prestamista";
import TipoTarjeta from "./tipoTarjeta";

class Tarjeta extends Model {}

Tarjeta.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    prestamista_id: DataTypes.INTEGER,
    banco_id: DataTypes.INTEGER,
    tipo_tarjeta_id: DataTypes.INTEGER,
    tarjeta_num: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "tarjetas",
    timestamps: false,
  }
);
//FK
Tarjeta.belongsTo(Banco, { as: 'banco', foreignKey: 'banco_id' });
Banco.hasMany(Tarjeta, { as: 'tarjeta', foreignKey: 'banco_id' });

Tarjeta.belongsTo(Prestamista, { as: 'prestamista', foreignKey: 'prestamista_id' });
Prestamista.hasMany(Tarjeta, { as: 'tarjeta', foreignKey: 'prestamista_id' });

Tarjeta.belongsTo(TipoTarjeta, { as: 'tipo_tarjeta', foreignKey: 'tipo_tarjeta_id' });
TipoTarjeta.hasMany(Tarjeta, { as: 'tarjeta', foreignKey: 'tipo_tarjeta_id' });

// Tarjeta.hasMany(CuentaAhorro, {
//   as: "cuenta_ahorro",
//   foreignKey: "tarjeta_id",
// });
// Tarjeta.belongsTo(TipoTarjeta, { foreignKey: "tipo_tarjeta_id" });
// // CuentaAhorro.belongsTo(Tarjeta);asd
// CuentaAhorro.belongsTo(Tarjeta, { foreignKey: "tarjeta_id" });

export default Tarjeta;
