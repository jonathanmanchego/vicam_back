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
// import documentTypeRoutes from './routes/documentTypeRoutes';
// import companyRoutes from './routes/companyRoutes';
// import positionRoutes from './routes/positionRoutes';
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const uploadRoutes_1 = __importDefault(require("./routes/uploadRoutes"));
const prestamistaRoutes_1 = __importDefault(require("./routes/prestamistaRoutes"));
const tarjetaRoutes_1 = __importDefault(require("./routes/tarjetaRoutes"));
// import clienteRoutes from './routes/clienteRoutes';
// import productoRoutes from './routes/productoRoutes';
// import ventaRoutes from './routes/ventaRoutes';
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
        ///asdasd
        // this.app.use('/api/document_types', documentTypeRoutes);
        // this.app.use('/api/companies', companyRoutes);
        // this.app.use('/api/positions', positionRoutes);
        // this.app.use('/api/productos', validarToken, productoRoutes);
        // this.app.use('/api/clientes', validarToken, clienteRoutes);
        // this.app.use('/api/ventas', ventaRoutes);
        // this.app.use('/api/new',  ventaRoutes);
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
