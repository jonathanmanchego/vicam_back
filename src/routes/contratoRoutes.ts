import { Router } from 'express';
import contratoController from '../controllers/contratoController';

class ContratoRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/',contratoController.save);
        this.router.get('/',contratoController.getAll);
        this.router.get('/PDF/:id',contratoController.contratoPDF);
    }
}

const contratoRoutes = new ContratoRoutes();
export default contratoRoutes.router;