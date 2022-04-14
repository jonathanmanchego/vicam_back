import { Router } from 'express';
import solicitudController from '../controllers/solicitudController';

class SolicitudRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/',solicitudController.save);
        this.router.get('/',solicitudController.getAll);
        this.router.put('/:id',solicitudController.update);
    }
}

const solicitudRoutes = new SolicitudRoutes();
export default solicitudRoutes.router;