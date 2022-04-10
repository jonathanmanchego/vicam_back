import { Router } from "express";
import cuentaAhorroController from "../controllers/cuentaAhorroController";

class CuentaAhorroRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/', cuentaAhorroController.save);
        this.router.delete('/', cuentaAhorroController.delete);
        this.router.get('/', cuentaAhorroController.getAll);
    }
}

const cuentaAhorroRoutes = new CuentaAhorroRoutes();
export default cuentaAhorroRoutes.router;