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
      const id = dbResponse.getDataValue('id');
      const solicitud_numero = { solicitud_numero: id }
      await Solicitud.update(solicitud_numero, { where: { id: id } });
      const dbResponse2 = await Solicitud.findByPk(id);
      res.json({
        status: true,
        msg: "Registro guardado",
        data: dbResponse2
      });
    } catch (error) {
      res.status(402).json({
        status: false,
        msg: "ocurrio un error",
        dataError: error,
      });
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const id = { id: req.params.id }
      const dataUpdate = req.body;
      const dbResponse = await Solicitud.update(dataUpdate, { where: id });
      console.log(dbResponse[0]);
      var dataResponse = {};
      if (dbResponse[0] != 0) {
        dataResponse = {
          status: true,
          msg: 'Solicitud actualizada',
          data: dbResponse
        }
      } else {
        dataResponse = {
          status: true,
          msg: 'Los campos no se modificaron',
          data: dbResponse
        }
      }
      res.json(dataResponse);
    } catch (error) {
      res.status(400).json({
        status: false,
        msg: 'ocurrio un error',
        dataError: error
      });
    }
  }

  public async getAll(req: Request, res: Response) {
    try {
      console.log(req.query);
      if (Object.keys(req.query).length != 0) {
        solicitudController.getByParams(req, res);
      } else {
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
          msg: "Registros de Solicitudes sin params",
          data: dbResponse,
        });
      }
    } catch (error) {
      res.status(400).json({
        status: false,
        msg: "ocurrio un error",
        dataError: error,
      });
    }
  }


  public async getByParams(req: Request, res: Response) {
    try {
      const paramsWhere: any = req.query;   
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
        where: paramsWhere
      });
      var dataResponse = {};
      if (dbResponse.length == 0) {
        dataResponse = {
          status: true,
          msg: "No se encontraron registros de solicitudes con params",
          data: dbResponse,
        }
      } else {
        dataResponse = {
          status: true,
          msg: "Registros de solicitudes con params",
          data: dbResponse,
        }
      }
      res.json(dataResponse);

    } catch (error) {
      res.status(400).json({
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
