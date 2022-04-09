import { Router } from "express";
import bancoController from "../controllers/bancoController";

class BancoRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', bancoController.getAll);
        this.router.get('/:id', bancoController.getOne);
        this.router.post('/', bancoController.save);
        this.router.put('/', bancoController.getAll);
        this.router.delete('/:id', bancoController.getAll);
    }
}

const bancoRoutes = new BancoRoutes();
export default bancoRoutes.router;