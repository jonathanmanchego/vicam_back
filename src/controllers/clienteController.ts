import { Request, Response } from 'express';
import db from '../database';

class ClienteController {
    
    public async create(req: Request, res: Response) {
        try {
            const saveData = req.body;
            const sql = `INSERT INTO clientes SET ?`;
            const response = await (await db).query(sql, [saveData]);
            res.json({
                status: true,
                msg: 'Cliente registrado',
                data:response
            });    
        } catch (error) {
            res.json(error);
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const updateData = [req.body.data, { idcliente: req.body.idcliente }];
            const sql = `UPDATE clientes SET ? Where ?`;
            const response = await (await db).query(sql, updateData);
            
            res.json({
                status: true,
                msg: 'Cliente actualizado',
                data: response
            });

        } catch (error) {
            res.json(error);
        }
    }

    public async delete(req: Request, res: Response) {
        try {
            const idcliente = { idcliente: req.body.idcliente };
            const sql = `DELETE FROM clientes WHERE ?`;
            const response = await (await db).query(sql, [idcliente]);
            
            res.json({
                status: true,
                msg: 'Cliente eliminado',
                data: response
            });

        } catch (error) {
            res.json(error);
        }
    }

    public async searchXdni(req: Request, res: Response) {
        try {
            const dni = { dni: req.body.dni }
            const sql = `SELECT * FROM clientes WHERE ?`;
            const response = await (await db).query(sql, [dni]);
            if (response.length>0) {
                res.json({
                    status: true,
                    msg: 'Cliente encontrado',
                    data: response
                });
            } else {
                res.json({
                    status: false,
                    msg: 'Cliente no encontrado',
                    data: []
                });
            }
        } catch (error) {
            res.json(error);
        }
    }

    // public async getClientes(req:Request, res:Response) {
    //     try {
    //         slq = ``; 
    //     } catch (error) {
    //         res.json(error);
    //     }
    // }

}

const clienteController = new ClienteController();
export default clienteController;