import { Request, Response } from 'express';
import EstadoContrato from '../models/estadoContrato';

class EstadoContratoController {
    
    public async save(req: Request, res: Response) {
        try {
            const dataSave = req.body;
            const dbResponse = await EstadoContrato.create(dataSave);
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
            const dbResponse = await EstadoContrato.findAll();
            res.json({
                status: true,
                msg: 'Resgistros de estado de solicitud',
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
    
    public async getOne(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const dbResponse = await EstadoContrato.findByPk(id);
            res.json({
                status: true,
                msg: 'estado',
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

}

const estadoContratoController = new EstadoContratoController();
export default estadoContratoController;