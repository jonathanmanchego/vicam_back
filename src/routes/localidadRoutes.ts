import { Router } from "express";
import localidadController from "../controllers/localidadController";

class LocalidadRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", localidadController.getAll);
  }
}

const localidadRoutes = new LocalidadRoutes();
export default localidadRoutes.router;
