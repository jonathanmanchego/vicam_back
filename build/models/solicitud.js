"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_1 = __importDefault(require("../database/mysql"));
const estadoSolicitud_1 = __importDefault(require("./estadoSolicitud"));
const cuentaAhorro_1 = __importDefault(require("./cuentaAhorro"));
const tarjeta_1 = __importDefault(require("./tarjeta"));
const prestamista_1 = __importDefault(require("./prestamista"));
const banco_1 = __importDefault(require("./banco"));
const plazoPago_1 = __importDefault(require("./plazoPago"));
const empleado_1 = __importDefault(require("./empleado"));
class Solicitud extends sequelize_1.Model {
}
Solicitud.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    estado_solicitud_id: sequelize_1.DataTypes.INTEGER,
    cuenta_ahorro_id: sequelize_1.DataTypes.INTEGER,
    tarjeta_id: sequelize_1.DataTypes.INTEGER,
    prestamista_id: sequelize_1.DataTypes.INTEGER,
    banco_id: sequelize_1.DataTypes.INTEGER,
    plazo_pago_id: sequelize_1.DataTypes.INTEGER,
    empleado_id: sequelize_1.DataTypes.INTEGER,
    solicitud_numero: sequelize_1.DataTypes.STRING,
    solicitud_fecha: sequelize_1.DataTypes.DATEONLY,
    solicitud_numero_deposito: sequelize_1.DataTypes.STRING,
    solicitud_boucher: sequelize_1.DataTypes.STRING,
    solicitud_duracion_meses: sequelize_1.DataTypes.INTEGER,
    solicitud_monto: sequelize_1.DataTypes.DECIMAL,
    solicitud_tasa_interes_personalizado: sequelize_1.DataTypes.DECIMAL
}, {
    sequelize: mysql_1.default,
    modelName: 'solicitudes',
    timestamps: false
});
//FK's
Solicitud.belongsTo(estadoSolicitud_1.default, { as: 'estado_solicitud', foreignKey: 'estado_solicitud_id' });
estadoSolicitud_1.default.hasMany(Solicitud, { as: 'solicitud', foreignKey: 'estado_solicitud_id' });
Solicitud.belongsTo(cuentaAhorro_1.default, { as: 'cuenta_ahorro', foreignKey: 'cuenta_ahorro_id' });
cuentaAhorro_1.default.hasMany(Solicitud, { as: 'solicitud', foreignKey: 'cuenta_ahorro_id' });
Solicitud.belongsTo(tarjeta_1.default, { as: 'tarjeta', foreignKey: 'tarjeta_id' });
tarjeta_1.default.hasMany(Solicitud, { as: 'solicitud', foreignKey: 'tarjeta_id' });
Solicitud.belongsTo(prestamista_1.default, { as: 'prestamista', foreignKey: 'prestamista_id' });
prestamista_1.default.hasMany(Solicitud, { as: 'solicitud', foreignKey: 'prestamista_id' });
Solicitud.belongsTo(banco_1.default, { as: 'banco', foreignKey: 'banco_id' });
banco_1.default.hasMany(Solicitud, { as: 'solicitud', foreignKey: 'banco_id' });
Solicitud.belongsTo(plazoPago_1.default, { as: 'plazo_pago', foreignKey: 'plazo_pago_id' });
plazoPago_1.default.hasMany(Solicitud, { as: 'solicitud', foreignKey: 'plazo_pago_id' });
Solicitud.belongsTo(empleado_1.default, { as: 'empleado', foreignKey: 'empleado_id' });
empleado_1.default.hasMany(Solicitud, { as: 'solicitud', foreignKey: 'empleado_id' });
// EstadoSolicitud.hasMany(Solicitud,{foreignKey:"estado_solicitud_id"});
// Prestamista.hasMany(Solicitud,{foreignKey:"prestamista_id"});
// Solicitud.belongsTo(Prestamista,{foreignKey:"prestamista_id"});
// Solicitud.belongsTo(CuentaAhorro,{foreignKey:"cuenta_ahorro_id"});
// Solicitud.belongsTo(Banco,{foreignKey:"banco_id"});
// Solicitud.belongsTo(EstadoSolicitud);
// Solicitud.belongsTo(CuentaAhorro,{foreignKey:"cuenta_ahorro_id"});
// Solicitud.belongsTo(Tarjeta,{foreignKey:"tarjeta_id"});
// Solicitud.belongsTo(Prestamista,{foreignKey:"prestamista_id"});
// Solicitud.belongsTo(Banco,{foreignKey:"banco_id"});
// Solicitud.belongsTo(PlazoPago,{foreignKey:"plazo_pago_id"});
// Solicitud.belongsTo(Empleado,{foreignKey:"empleado_id"});
exports.default = Solicitud;
