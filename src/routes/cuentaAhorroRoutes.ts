import { Router } from "express";
import cuentaAhorroController from "../controllers/cuentaAhorroController";

class CuentaAhorroRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/', cuentaAhorroController.save);
        this.router.get('/', cuentaAhorroController.getAll);
        this.router.get('/:id', cuentaAhorroController.getOne);
        this.router.delete('/:id', cuentaAhorroController.delete);
    }
}

const cuentaAhorroRoutes = new CuentaAhorroRoutes();
export default cuentaAhorroRoutes.router;