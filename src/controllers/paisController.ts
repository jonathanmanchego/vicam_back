import { Request, Response } from "express";
import Pais from "../models/pais";

class PaisController {
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const dbResponse = await Pais.findAll();
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
const paisController = new PaisController();
export default paisController;
