import { Request, Response } from 'express';
import Pago from '../models/pago';

class PagoController {
    
    public async save(req: Request, res: Response) {
        try {
            const dataSave = req.body;
            const dbResponse = await Pago.create(dataSave);
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

    public async getAll() {
        try {
            
        } catch (error) {
            
        }
    }

}

const pagoController = new PagoController();
export default pagoController;