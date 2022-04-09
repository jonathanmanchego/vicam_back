import { Router } from "express";
import estadoSolicitudController from "../controllers/estadoSolicitudController";

class EstadoSolicitudRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/save', estadoSolicitudController.save);
        this.router.post('/getAll', estadoSolicitudController.getAll);
        this.router.post('/getAll', estadoSolicitudController.getAll);
    }
}

const estadoSolicitudRoutes = new EstadoSolicitudRoutes();
export default estadoSolicitudRoutes.router;