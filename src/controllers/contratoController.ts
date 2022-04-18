import { Request, Response } from "express";
import pdfKit from 'pdfkit';
import fs from 'fs';

import Banco from "../models/banco";
import Contrato from "../models/contrato";
import CuentaAhorro from "../models/cuentaAhorro";
import Departamento from "../models/departamento";
import EstadoContrato from "../models/estadoContrato";
import Localia from "../models/localia";
import PlazoPago from "../models/plazoPago";
import Prestamista from "../models/prestamista";
import Provincia from "../models/provincia";
import Solicitud from "../models/solicitud";
import Tarjeta from "../models/tarjeta";

import ContratoToPDF from "../helpers/contratoToPDF";

class ContratoController {
  public async save(req: Request, res: Response) {
    try {
      const dataSave = req.body;
      const dbResponse = await Contrato.create(dataSave);
      const id = dbResponse.getDataValue('id');
      const contrato_numero = { contrato_numero: id };
      await Contrato.update(contrato_numero, { where: { id: id } });
      const dbResponse2 = await Contrato.findByPk(id);
      res.json({
        status: true,
        msg: "Registro guardado",
        data: dbResponse2,
      });
    } catch (error) {
      res.json({
        status: false,
        msg: "ocurrio un error",
        dataError: error,
      });
    }
  }

  public async generarContrato(req:Request,res:Response) {
    try {
      const solicitud_id = { id: req.params.solicitud_id };
      const dbResponse = await Solicitud.findAll({
        include: [{
          model: PlazoPago,
          as:'plazo_pago'
        }],
        where: solicitud_id
      });
      const solicitud = dbResponse[0].toJSON();
      var contrato = {
        prestamista_id: solicitud.prestamista_id,
        estado_contrato_id: 1,
        solicitud_id: solicitud.id,
        cuenta_ahorro_id: solicitud.cuenta_ahorro_id,
        tarjeta_id: solicitud.tarjeta_id,
        banco_id: solicitud.banco_id,
        contrato_monto_prestamo: Number(solicitud.solicitud_monto),
        contrato_monto_interes: 0,
        contrato_monto_total_pago: 0,
        contrato_tasa_interes: Number(solicitud.plazo_pago.plazo_pago_tasa_interes)
      };
      contrato.contrato_monto_interes = solicitud.solicitud_monto * solicitud.plazo_pago.plazo_pago_tasa_interes;
      contrato.contrato_monto_total_pago = contrato.contrato_monto_prestamo + contrato.contrato_monto_interes;
      const dbResponse2 = await Contrato.create(contrato);
      const contrato_id = dbResponse2.getDataValue('id');
      const contrato_numero = { contrato_numero: contrato_id };
      const estado_solicitud = { estado_solicitud_id: 2 };
      await Contrato.update(contrato_numero, { where: { id: contrato_id } });
      await Solicitud.update(estado_solicitud, { where: { id: solicitud.id } });
      const dbResponse3 = await Contrato.findByPk(contrato_id);

      res.json({
        status: true,
        msg: 'okk!!',
        data: dbResponse3
      });

    } catch (error) {
      res.status(400).json({
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
      const dbResponse = await Contrato.update(dataUpdate, { where: id });
      console.log(dbResponse[0]);
      var dataResponse = {};
      if (dbResponse[0] != 0) {
        dataResponse = {
          status: true,
          msg: 'Contrato actualizado',
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
      const dbResponse = await Contrato.findAll({
        include: [
          {
            model: EstadoContrato,
            as: 'estado_contrato'
          },
          {
            model: Prestamista,
            as: 'prestamista'
          },
          {
            model: CuentaAhorro,
            as: 'cuenta_ahorro'
          },
          {
            model: Tarjeta,
            as: 'tarjeta'
          },
          {
            model: Banco,
            as: 'banco'
          }
        ],
      });
      res.json({
        status: true,
        msg: "Lista de contratos",
        data: dbResponse,
      });
    } catch (error) {
      res.json({
        status: false,
        msg: "ocurrio un error!",
        dataError: error,
      });
    }
  }


  public async getContratoByPk(pk: any) {
    const id = { id: pk };
    const dbResponse = await Contrato.findAll({
        include: [
          {
            model: EstadoContrato,
            as: 'estado_contrato'
          },
          {
            model: Prestamista,
            as: 'prestamista',
            include: [{
              model: Localia,
              as: 'localia'
            },
            {
              model: Provincia,
              as: 'provincia'
            },
            {
              model: Departamento,
              as: 'departamento'
            }
            ]
          },
          {
            model: CuentaAhorro,
            as: 'cuenta_ahorro'
          },
          {
            model: Tarjeta,
            as: 'tarjeta'
          },
          {
            model: Banco,
            as: 'banco'
          }
        ],
        where:id
    });
    return dbResponse;
  }

  public async getOne(req: Request, res: Response) {
    try {
      const dbResponse = await contratoController.getContratoByPk(req.params.id);
      res.json({
        status: true,
        msg: "Información del contrato",
        data: dbResponse,
      });

    } catch (error) {
      res.status(400).json({
        status: false,
        msg: "ocurrio un error!",
        dataError: error,
      });
    }    
  }

  public async contratoPDF(req: Request, res: Response) {
    try {
      const dbResponse = await contratoController.getContratoByPk(req.params.id);
      const contrato = (dbResponse[0].toJSON());
      console.log(contrato);
      const doc = await ContratoToPDF.getContratoPDF(contrato);
      res.json({
        status: true,
        msg: 'okk!!!',
        data: contrato
      });
    } catch (error) {
      res.json({
        status:false,
        data:error
      });
    }
  }
}

const contratoController = new ContratoController();
export default contratoController;
