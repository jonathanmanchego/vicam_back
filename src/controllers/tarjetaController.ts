import { Request, Response } from 'express';
import Tarjeta from '../models/tarjeta';

class TarjetaController {

    public async save(req:Request,res:Response) {
        try {
            const dataSave = {
                prestamista_id: req.body.prestamista_id,
                banco_id: req.body.banco_id,
                tarjeta_num: req.body.tarjeta_num,
                cuenta_ahorro: 
                    req.body.cuenta_ahorro
            };
            const dbResponse = await Tarjeta.create(dataSave,{include:"cuenta_ahorro"});
            const dataResponse = {
                stauts: true,
                msg: 'Registro guardado',
                data: dbResponse
            };
            res.json(dataResponse);
        } catch (error) {
            const dataErrorResponse = {
                status: false,
                msg: 'Ocurrio un error!!',
                dataError: error
            }
            res.json(dataErrorResponse);
        }    
    }

    public async delete(req: Request, res: Response) {
        try {
            const id = { tarjeta_id: req.body.tarjeta_id };
            const dbResponse = await Tarjeta.destroy({ where:  id  });
            const dataResponse = {
                stauts: true,
                msg: 'Registro eliminado',
                data: dbResponse
            };
            res.json(dataResponse);
        } catch (error) {
            const dataErrorResponse = {
                status: false,
                msg: 'Ocurrio un error!!',
                dataError: error
            }
            res.json(dataErrorResponse);
        }        
    }

    public async getOne(req: Request, res: Response) {
        try {
            const id = req.body.tarjeta_id;
            const dbResponse = await Tarjeta.findByPk(id);
            const dataResponse = {
                stauts: true,
                msg: 'Registro eliminado',
                data: dbResponse
            };
            res.json(dataResponse);
        } catch (error) {
            const dataErrorResponse = {
                status: false,
                msg: 'Ocurrio un error!!',
                dataError: error
            }
            res.json(dataErrorResponse);
        }                
    }

}

const tarjetaController = new TarjetaController();
export default tarjetaController;