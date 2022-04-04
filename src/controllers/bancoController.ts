import { Request, Response } from "express";
import Banco from "../models/banco";


class BancoController {
    public async save(req:Request) {
        
    }

    public async getBancos(req: Request, res: Response) {
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