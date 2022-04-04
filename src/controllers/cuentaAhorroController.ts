import { Request, Response } from 'express';
import CuentaAhorro from '../models/cuentaAhorro';

class CuentaAhorroController {
    public async save(req: Request, res: Response) {
        try {
            const dataSave = {
                tarjeta_id: req.body.tarjeta_id,
                prestamista_id: req.body.prestamista_id,
                banco_id: req.body.banco_id,
                cuenta_numero: req.body.cuenta_numero
            };
            const dbResponse = await CuentaAhorro.create(dataSave);
            const dataResponse = {
                status: true,
                msg: 'Registro guardado',
                data: dbResponse
            };
            res.json(dataResponse);
        } catch (error) {
            const dataErrorResponse = {
                status: false,
                msg: 'Ocurrio un error!',
                dataError: error
            };
            res.json(dataErrorResponse);
        }   
    }

    public async update(req: Request, res: Response) {
        try {
            const id = { cuenta_ahorro_id: req.body.cuenta_ahorro_id };
            const dataUpdate = {
                tarjeta_id: req.body.tarjeta_id,
                prestamista_id: req.body.prestamista_id,
                banco_id: req.body.banco_id,
                cuenta_numero: req.body.cuenta_numero
            }
            const dbResponse = await CuentaAhorro.update(dataUpdate, { where: id });
            const dataResponse = {
                status: true,
                msg: 'Registro actualizado',
                data: dbResponse
            };
            res.json(dataResponse);
        } catch (error) {
            const dataErrorResponse = {
                status: false,
                msg: 'Ocurrio un error!',
                dataError: error
            };
            res.json(dataErrorResponse);
        }   
    }

    public async delete(req: Request, res: Response) {
        try {
            const id = { cuenta_ahorro_id: req.body.cuenta_ahorro_id };
            const dbResponse = await CuentaAhorro.destroy({ where:  id  });
            const dataResponse = {
                status: true,
                msg: 'Registro eliminado',
                data: dbResponse
            };  
            res.json(dataResponse);
        } catch (error) {
            const dataErrorResponse = {
                status: false,
                msg: 'Ocurrio un error!',
                data: error
            };
            res.json(dataErrorResponse);
        }   
    }
    
    public async getOne(req: Request, res: Response) {
        try {
            const dbResponse = await CuentaAhorro.findByPk(req.body.cuenta_ahorro_id);
            const dataResponse = {
                status: true,
                msg: 'Datos de cuenta',
                data: dbResponse
            };
            res.json(dataResponse);
        } catch (error) {
            const dataErrorResponse = {
                status: false,
                msg: 'Ocurrio un error!',
                dataError: error
            };  
            res.json(dataErrorResponse);
        }   
    }

    public async getAll(req: Request, res: Response) {
        try {
            const dbResponse = await CuentaAhorro.findAll();
            const dataResponse = {
                status: true,
                msg: 'Lista de cuentas',
                data: dbResponse
            };
            res.json(dataResponse);
        } catch (error) {
            const dataErrorResponse = {
                status: false,
                msg: 'Ocurrio un error!',
                dataError: error
            };
            res.json(dataErrorResponse);
        }   
    }
}

const cuentaAhorroController = new CuentaAhorroController();
export default cuentaAhorroController;