import { Router } from "express";
import positionController from "../controllers/postionController";

class PositionRoutes {
    
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.post('/save',positionController.save);
        this.router.post('/getPostions',positionController.getPositions);
    }
}

const positionRoutes = new PositionRoutes();
export default positionRoutes.router;