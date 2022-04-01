import { Router } from 'express';
import clienteController from '../controllers/clienteController';

class ClienteRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.post('/create', clienteController.create);
        this.router.post('/update', clienteController.update);
        this.router.post('/delete', clienteController.delete);
        this.router.post('/searchXdni', clienteController.searchXdni);
    }

}

const clienteRoutes = new ClienteRoutes();
export default clienteRoutes.router;