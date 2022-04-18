import { Router } from "express";
import provinciaController from "../controllers/provinciaController";

class ProvinciaRouter {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", provinciaController.getAll);
  }
}

const provinciaRouter = new ProvinciaRouter();
export default provinciaRouter.router;
