import { Request, Response } from "express";
import Banco from "../models/banco";


class BancoController {
    public async save(req: Request, res: Response) {
        try {
            const saveData = req.body;
            const dbResponse = await Banco.create(saveData);
            res.json({
                status: true,
                msg: 'Registro guardado',
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

    public async getAll(req: Request, res: Response) {
        try {
            const dbResponse = await Banco.findAll();
            res.json({
                status: true,
                msg: 'Registro de bancos',
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

    public async getOne(req: Request, res: Response) {
        try {
            const dataUpdate = req.body.banco_name;
            const id = req.params.id;
            const dbResponse = await Banco.findByPk(id);
            res.json({
                status: true,
                msg: 'Registro de bancos',
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

    public async update(req: Request, res: Response) {
        try {
            const dbResponse = await Banco.findAll();
            res.json({
                status: true,
                msg: 'Registro de bancos',
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

const bancoController = new BancoController();
export default bancoController;