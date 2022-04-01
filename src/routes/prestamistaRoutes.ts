import { Router } from "express";
import prestamistaController from "../controllers/prestamistaController";

class PrestamistaRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/save', prestamistaController.save);
        this.router.post('/update', prestamistaController.update);
        this.router.post('/destroy', prestamistaController.delete);
        this.router.post('/getOne', prestamistaController.getOne);
        this.router.post('/getAll', prestamistaController.getAll);
    }
}

const prestamistaRoutes = new PrestamistaRoutes();
export default prestamistaRoutes.router;