import { Router } from 'express';
import ventaController from '../controllers/ventaController';

class VentaRouter {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.post('/create', ventaController.create);
        this.router.post('/delete', ventaController.delete);
        
    }
}

const ventaRouter = new VentaRouter();
export default ventaRouter.router;