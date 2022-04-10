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
        this.router.put('/:id', bancoController.update);
        this.router.delete('/:id', bancoController.delete);
    }
}

const bancoRoutes = new BancoRoutes();
export default bancoRoutes.router;