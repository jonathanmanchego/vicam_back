import { Router } from 'express';
import empleadoController from '../controllers/empleadoController';

class EmpleadoRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/save',empleadoController.save);
    }
}

const empleadoRoutes = new EmpleadoRoutes();
export default empleadoRoutes.router;