import { Router } from 'express';
import productoController from '../controllers/productoController';

class ProductoRoutes {

    public router: Router = Router();

    constructor() {
        this.config();    
    }

    config() {
        this.router.post('/create',productoController.create);
        this.router.post('/updatePrice',productoController.updatePrice);
        this.router.post('/update',productoController.update);
        this.router.post('/delete',productoController.delete);
        this.router.post('/getProductos',productoController.getProductos);
    }
}

const productoRoutes = new ProductoRoutes();
export default productoRoutes.router;