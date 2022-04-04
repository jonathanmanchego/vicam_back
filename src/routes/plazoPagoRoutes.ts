import { Router } from "express";
import plazoPagoController from "../controllers/plazoPagoController";

class PlazoPagoRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/save', plazoPagoController.save);
        this.router.post('/getAll', plazoPagoController.getAll);
    }
}

const plazoPagoRoutes = new PlazoPagoRoutes();
export default plazoPagoRoutes.router;