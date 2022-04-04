import { Request, Response } from "express";
import Contrato from "../models/contrato";
import EstadoContrato from "../models/estadoContrato";
import Prestamista from "../models/prestamista";
import Solicitud from "../models/solicitud";

class ContratoController {
    public async save(req: Request, res: Response) {
        try {
            const dataSave = req.body;
            const dbResponse = await Contrato.create(dataSave);
            res.json({
                status: true,
                msg: 'Registro guardado',
                data:dbResponse
            });
        } catch (error) {
            res.json({
                status: false,
                msg: 'ocurrio un error',
                dataError:error
            });
        }       
    }

    public async getAll(req: Request, res: Response) {
        try {
            const dbResponse = await Contrato.findAll(
            {
                include: [{
                    model: EstadoContrato
                }, {
                    model: Prestamista
                }, {
                    model: Solicitud
                }]
            }
            );
            res.json({
                status: true,
                msg: 'Lista de contratos',
                data: dbResponse
            });
        } catch (error) {
            res.json({
                status: false,
                msg: 'ocurrio un error!',
                dataError:error
            });
        }        
    }
}

const contratoController = new ContratoController();
export default contratoController;