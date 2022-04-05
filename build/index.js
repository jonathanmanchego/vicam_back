"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const validarToken_1 = require("./middlewares/validarToken");
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const uploadRoutes_1 = __importDefault(require("./routes/uploadRoutes"));
const prestamistaRoutes_1 = __importDefault(require("./routes/prestamistaRoutes"));
const tarjetaRoutes_1 = __importDefault(require("./routes/tarjetaRoutes"));
const bancoRoutes_1 = __importDefault(require("./routes/bancoRoutes"));
const solicitudRoutes_1 = __importDefault(require("./routes/solicitudRoutes"));
const contratoRoutes_1 = __importDefault(require("./routes/contratoRoutes"));
const pagoRoutes_1 = __importDefault(require("./routes/pagoRoutes"));
const estadoContratoRoutes_1 = __importDefault(require("./routes/estadoContratoRoutes"));
const estadoSolicitudRoutes_1 = __importDefault(require("./routes/estadoSolicitudRoutes"));
const plazoPagoRoutes_1 = __importDefault(require("./routes/plazoPagoRoutes"));
const cuentaAhorroRoutes_1 = __importDefault(require("./routes/cuentaAhorroRoutes"));
const empleadoRoutes_1 = __importDefault(require("./routes/empleadoRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/auth', authRoutes_1.default);
        this.app.use('/api/prestamistas', prestamistaRoutes_1.default);
        this.app.use('/api/tarjetas', tarjetaRoutes_1.default);
        this.app.use('/api/bancos', bancoRoutes_1.default);
        this.app.use('/api/solicitudes', solicitudRoutes_1.default);
        this.app.use('/api/contratos', contratoRoutes_1.default);
        this.app.use('/api/pagos', pagoRoutes_1.default);
        this.app.use('/api/estadosContratos', estadoContratoRoutes_1.default);
        this.app.use('/api/estadosSolicitudes', estadoSolicitudRoutes_1.default);
        this.app.use('/api/plazosPagos', plazoPagoRoutes_1.default);
        this.app.use('/api/cuentasAhorros', cuentaAhorroRoutes_1.default);
        this.app.use('/api/empleados', empleadoRoutes_1.default);
        /** RUTA ARCHIVOS */
        this.app.use('/api/upload', validarToken_1.validarToken, uploadRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
