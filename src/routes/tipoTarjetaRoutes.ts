import { Router } from "express";
import tipoTarjetaController from "../controllers/tipoTarjetaController";

class TipoTarjetaRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", tipoTarjetaController.getAll);
    this.router.post("/", tipoTarjetaController.save);
  }
}

const tarjetaRoutes = new TipoTarjetaRoutes();
export default tarjetaRoutes.router;
