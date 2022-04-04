import { Router } from "express";
import estadoContratoController from "../controllers/estadoContratoController";

class EstadoContratoRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/save', estadoContratoController.save);
        this.router.post('/getAll', estadoContratoController.getAll);
    }
}

const estadoContratoRoutes = new EstadoContratoRoutes();
export default estadoContratoRoutes.router;