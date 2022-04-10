import { Router } from 'express';
import tarjetaController from '../controllers/tarjetaController';

class TarjetaRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/',tarjetaController.save);
    }
}

const tarjetaRoutes = new TarjetaRoutes();
export default tarjetaRoutes.router;