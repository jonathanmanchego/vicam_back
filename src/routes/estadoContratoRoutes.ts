import { Router } from "express";
import estadoContratoController from "../controllers/estadoContratoController";

class EstadoContratoRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/', estadoContratoController.save);
        this.router.get('/', estadoContratoController.getAll);
    }
}

const estadoContratoRoutes = new EstadoContratoRoutes();
export default estadoContratoRoutes.router;