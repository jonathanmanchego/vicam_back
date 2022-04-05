import { Router } from "express";
import bancoController from "../controllers/bancoController";

class BancoRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', bancoController.getBancos);
    }
}

const bancoRoutes = new BancoRoutes();
export default bancoRoutes.router;