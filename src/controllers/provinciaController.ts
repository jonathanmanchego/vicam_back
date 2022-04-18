import { Request, Response } from "express";
import Provincia from "../models/provincia";

class ProvinciaController {
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const dbResponse = await Provincia.findAll();
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
const provinciaController = new ProvinciaController();
export default provinciaController;
