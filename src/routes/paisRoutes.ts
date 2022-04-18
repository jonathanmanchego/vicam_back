import { Router } from "express";
import paisController from "../controllers/paisController";

class PaisRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", paisController.getAll);
  }
}

const paisRoutes = new PaisRoutes();
export default paisRoutes.router;
