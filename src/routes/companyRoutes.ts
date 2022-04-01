import { Router } from "express";
import companyController from "../controllers/companyController";

class CompanyRoutes {
    
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/save', companyController.save);
        this.router.post('/update', companyController.update);
    }
}

const companyRoutes = new CompanyRoutes();
export default companyRoutes.router;