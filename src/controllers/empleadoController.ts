import { Request, Response } from "express";
import Empleado from "../models/empleado";
import User from "../models/user";

class EmpleadoController {

    public async save(req:Request,res:Response) {
        try {
            const saveData = req.body;
            const dbResponse = await User.create(saveData, { include: "empleado" });
            // const dbResponse = await User.create(dataSave,{include:"prestamista"}); 
            
            res.json({
                status: true,
                msg: 'Empleado registrado',
                data: dbResponse
            });
        } catch (error) {
            res.json({
                status: false,
                msg: 'Ocurrio un error!',
                dataError:error
            });
        }
    }

    public async getAll(req: Request, res: Response) {
        try {
            const dbResponse = await Empleado.findAll();
            res.json({
                status: true,
                msg: 'Registro de empleados',
                data: dbResponse
            });
        } catch (error) {
            res.json({
                status: false,
                msg: 'Ocurrio un error!',
                dataError:error
            });
        }        
    }

    public async getOne(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const dbResponse = await Empleado.findByPk(id);
            res.json({
                status: true,
                msg: 'datos del empleado',
                data: dbResponse
            });
        } catch (error) {
            res.json({
                status: false,
                msg: 'Ocurrio un error!',
                dataError:error
            });
        }        
    }
}

const empleadoController = new EmpleadoController();
export default empleadoController;