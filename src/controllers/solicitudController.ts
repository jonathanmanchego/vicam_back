import { Request, Response } from "express";
import Banco from "../models/banco";
import CuentaAhorro from "../models/cuentaAhorro";
import Prestamista from "../models/prestamista";
import Solicitud from "../models/solicitud";

class SolicitudController {

  public async save(req: Request, res: Response) {
    try {
      const dataSave = req.body;
      const dbResponse = await Solicitud.create(dataSave);
      res.json({
        status: true,
        msg: "Registro guardado",
        data: dbResponse,
      });
    } catch (error) {
      res.status(402).json({
        status: false,
        msg: "ocurrio un error",
        dataError: error,
      });
    }
  }

  public async getAll(req: Request, res: Response) {
    try {
      const dbResponse = await Solicitud.findAll({
        include: [
          {
            model: Prestamista,
          },
          {
            model: CuentaAhorro,
          },
          {
            model: Banco,
          },
        ],
      });
      res.json({
        status: true,
        msg: "Registro guardado",
        data: dbResponse,
      });
    } catch (error) {
      res.json({
        status: false,
        msg: "ocurrio un error",
        dataError: error,
      });
    }
  }

  // public async getOne(req: Request, res: Response) {
  //     try {
  //         const dbResponse = await ;
  //         res.json({
  //             status: true,
  //             msg: 'Registro guardado',
  //             data: dbResponse
  //         });
  //     } catch (error) {
  //         res.json({
  //             status: false,
  //             msg: 'ocurrio un error',
  //             dataError:error
  //         });
  //     }
  // }
  
}

const solicitudController = new SolicitudController();
export default solicitudController;
