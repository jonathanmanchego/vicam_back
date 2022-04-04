import { Router } from 'express';
import contratoController from '../controllers/contratoController';

class ContratoRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/save',contratoController.save);
        this.router.post('/getAll',contratoController.getAll);
    }
}

const contratoRoutes = new ContratoRoutes();
export default contratoRoutes.router;