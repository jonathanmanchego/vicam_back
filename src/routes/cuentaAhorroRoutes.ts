import { Router } from "express";
import cuentaAhorroController from "../controllers/cuentaAhorroController";

class CuentaAhorroRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/save', cuentaAhorroController.save);
        this.router.post('/delete', cuentaAhorroController.delete);
        this.router.post('/getAll', cuentaAhorroController.getAll);
    }
}

const cuentaAhorroRoutes = new CuentaAhorroRoutes();
export default cuentaAhorroRoutes.router;