import { Router } from 'express';
import pagoController from '../controllers/pagoController';

class PagoRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/',pagoController.save);
        this.router.get('/:contrato_id',pagoController.generarPago);
    }
}

const pagoRoutes = new PagoRoutes();
export default pagoRoutes.router;