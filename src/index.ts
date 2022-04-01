import express, { Application, json, urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from "path";

import { validarToken } from './middlewares/validarToken';

// import documentTypeRoutes from './routes/documentTypeRoutes';
// import companyRoutes from './routes/companyRoutes';
// import positionRoutes from './routes/positionRoutes';

import indexRoutes from './routes/indexRoutes';
import authRoutes from './routes/authRoutes';
import uploadRoutes from './routes/uploadRoutes';
import prestamistaRoutes from './routes/prestamistaRoutes';
import tarjetaRoutes from './routes/tarjetaRoutes';

// import clienteRoutes from './routes/clienteRoutes';
// import productoRoutes from './routes/productoRoutes';
// import ventaRoutes from './routes/ventaRoutes';

class Server{

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes(); 
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
        
        this.app.use(express.static(path.join(__dirname, 'public')));
    }

    routes(): void {
        this.app.use( indexRoutes );
        this.app.use('/api/auth', authRoutes);

        this.app.use('/api/prestamistas', prestamistaRoutes);
        this.app.use('/api/tarjetas', tarjetaRoutes);
        ///asdasd
        // this.app.use('/api/document_types', documentTypeRoutes);
        // this.app.use('/api/companies', companyRoutes);
        // this.app.use('/api/positions', positionRoutes);

        // this.app.use('/api/productos', validarToken, productoRoutes);
        // this.app.use('/api/clientes', validarToken, clienteRoutes);
        // this.app.use('/api/ventas', ventaRoutes);
        // this.app.use('/api/new',  ventaRoutes);
        
        /** RUTA ARCHIVOS */
        this.app.use('/api/upload', validarToken, uploadRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port')); 
        });
    }
}

const server = new Server();
server.start();