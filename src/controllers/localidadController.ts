import { Request, Response } from "express";
import Departamento from "../models/departamento";

class LocalidadController {
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const dbResponse = await Departamento.findAll();
      const dataResponse = {
        stauts: true,
        msg: "Registros obtenidos",
        data: dbResponse,
      };
      res.json(dataResponse);
    } catch (error) {
      const dataErrorResponse = {
        status: false,
        msg: "Ocurrio un error!!",
        dataError: error,
      };
      res.status(500).json(dataErrorResponse);
    }
  }
}
const localidadController = new LocalidadController();
export default localidadController;
