import { Request, Response } from 'express';
import EstadoSolicitud from '../models/estadoSolicitud';

class EstadoSolicitudController {
    
    public async save(req: Request, res: Response) {
        try {
            const dataSave = req.body;
            const dbResponse = await EstadoSolicitud.create(dataSave);
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
            const dbResponse = await EstadoSolicitud.findAll();
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

}

const estadoSolicitudController = new EstadoSolicitudController();
export default estadoSolicitudController;