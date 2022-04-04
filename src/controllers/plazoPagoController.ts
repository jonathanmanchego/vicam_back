import { Request, Response } from 'express';
import PlazoPago from '../models/plazoPago';

class PlazoPagoController {
    
    public async save(req: Request, res: Response) {
        try {
            const dataSave = req.body;
            const dbResponse = await PlazoPago.create(dataSave);
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
            const dbResponse = await PlazoPago.findAll();
            res.json({
                status: true,
                msg: 'Resgistros de plazos de pago',
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

const plazoPagoController = new PlazoPagoController();
export default plazoPagoController;