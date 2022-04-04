import { Router } from 'express';
import solicitudController from '../controllers/solicitudController';

class SolicitudRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/save',solicitudController.save);
        this.router.post('/getAll',solicitudController.getAll);
    }
}

const solicitudRoutes = new SolicitudRoutes();
export default solicitudRoutes.router;