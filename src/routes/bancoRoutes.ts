import { Router } from "express";
import bancoController from "../controllers/bancoController";

class BancoRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', bancoController.getBancos);
        this.router.post('/', bancoController.getBancos);
        this.router.put('/', bancoController.getBancos);
        this.router.delete('/', bancoController.getBancos);
    }
}

const bancoRoutes = new BancoRoutes();
export default bancoRoutes.router;