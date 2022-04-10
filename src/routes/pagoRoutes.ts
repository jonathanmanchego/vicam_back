import { Router } from 'express';
import pagoController from '../controllers/pagoController';

class PagoRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/',pagoController.save);
    }
}

const pagoRoutes = new PagoRoutes();
export default pagoRoutes.router;