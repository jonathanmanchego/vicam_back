import { Router } from "express";
import estadoSolicitudController from "../controllers/estadoSolicitudController";

class EstadoSolicitudRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/', estadoSolicitudController.save);
        this.router.get('/', estadoSolicitudController.getAll);
    }
}

const estadoSolicitudRoutes = new EstadoSolicitudRoutes();
export default estadoSolicitudRoutes.router;