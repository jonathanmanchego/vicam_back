import { Request, Response } from "express";
import Banco from "../models/banco";
import CuentaAhorro from "../models/cuentaAhorro";
import Empleado from "../models/empleado";
import EstadoSolicitud from "../models/estadoSolicitud";
import PlazoPago from "../models/plazoPago";
import Prestamista from "../models/prestamista";
import Solicitud from "../models/solicitud";
import Tarjeta from "../models/tarjeta";

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
      // const dbResponse = await Solicitud.findAll();
      const dbResponse = await Solicitud.findAll({
        include: [
          {
            model: Prestamista,
            as: 'prestamista'
          },
          {
            model: CuentaAhorro,
            as: 'cuenta_ahorro'
          },
          {
            model: Banco,
            as: 'banco'
          },
          {
            model: EstadoSolicitud,
            as: 'estado_solicitud'
          },
          {
            model: Tarjeta,
            as: 'tarjeta'
          },
          {
            model: PlazoPago,
            as: 'plazo_pago'
          },
          {
            model: Empleado,
            as: 'empleado'
          }
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
