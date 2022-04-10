import { Router } from 'express';
import empleadoController from '../controllers/empleadoController';

class EmpleadoRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/',empleadoController.save);
        this.router.get('/',empleadoController.getAll);
        this.router.get('/:id',empleadoController.getOne);
    }
}

const empleadoRoutes = new EmpleadoRoutes();
export default empleadoRoutes.router;