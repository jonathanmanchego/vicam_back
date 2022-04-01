import { Request, Response } from 'express';
import db from '../database';

class VentaController{

    public async create(req: Request, res: Response) {
        try {
            const saveDataVenta = req.body.venta;
            const sql = `INSERT INTO ventas SET ?`;
            const response = await (await db).query(sql, [saveDataVenta]);
            if (response.insertId>0) {
                const saveDataDetallesVenta = req.body.detallesVenta;
                await ventaController.saveDetalles(response.insertId,saveDataDetallesVenta);
                
                res.json({
                    status: true,
                    msg: 'Venta realizada',
                    data: response
                });

            } else {
                res.json({
                    status: false,
                    msg: 'La venta no se realizó',
                    data: response
                });
            }
        } catch (error) {
            res.json(error);
        }
    }

    public async saveDetalles(idventa: number, detalles: any) {
        console.log(idventa);
        console.log(detalles);
        const sql2 = `INSERT INTO detalles_ventas SET ?`;
        for (let i = 0; i < detalles.length; i++){
            detalles[i].idventa = idventa;
            await (await db).query(sql2,[detalles[i]]);
        }
    }

    public async delete(req: Request, res: Response) {
        try {
            const idventa = { idventa: req.body.idventa };
            const sql1 = `DELETE FROM detalles_ventas WHERE ?`;
            const sql2 = `DELETE FROM ventas WHERE ?`;
            const response1 = await (await db).query(sql1,[idventa]);
            const response2 = await (await db).query(sql2, [idventa]);
            res.json({
                status: true,
                msg: 'La venta fue eliminada',
                data: response2
            });
        } catch (error) {
            res.json(error);
        }
    }

}

const ventaController = new VentaController();
export default ventaController;