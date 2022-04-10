import { Router } from "express";
import prestamistaController from "../controllers/prestamistaController";

class PrestamistaRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', prestamistaController.getAll);
        this.router.post('/', prestamistaController.save);
        this.router.put('/:id', prestamistaController.update);
        this.router.delete('/:id', prestamistaController.delete);
        this.router.get('/:id', prestamistaController.getOne);
    }
}

const prestamistaRoutes = new PrestamistaRoutes();
export default prestamistaRoutes.router;