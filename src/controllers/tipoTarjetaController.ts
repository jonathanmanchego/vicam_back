import { Request, Response } from "express";
import Tarjeta from "../models/tarjeta";
import TipoTarjeta from "../models/tipoTarjeta";

class TipoTarjetaController {
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const dbResponse = await TipoTarjeta.findAll();
      const dataResponse = {
        stauts: true,
        msg: "Registro guardado",
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
  public async save(req: Request, res: Response) {
    try {
      const dbResponse = await TipoTarjeta.create(req.body);
      const dataResponse = {
        stauts: true,
        msg: "Registro guardado",
        data: dbResponse,
      };
      res.json(dataResponse);
    } catch (error) {
      const dataErrorResponse = {
        status: false,
        msg: "Ocurrio un error!!",
        dataError: error,
      };
      res.status(402).json(dataErrorResponse);
    }
  }
}
const tipoTarjetaController = new TipoTarjetaController();
export default tipoTarjetaController;
