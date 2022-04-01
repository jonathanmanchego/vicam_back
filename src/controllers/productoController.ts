import { Request, Response } from 'express';
import db from '../database';

class ProductoController {

    public async getProductos(req:Request,res:Response) {
        try {
            const sql = `select *,
                            (select categoria from categorias where idcategoria=p.idcategoria) as categoria,
                            (select idprecio from precios where idproducto=p.idproducto and estado=1) as idprecio,
                            (select precio from precios where idproducto=p.idproducto and estado=1) as precio
                        from productos as p`;
            const response = await (await db).query(sql);
            if (response.length>0) {
                res.json({
                            status: true,
                            msg: 'Lista de productos',
                            data: response
                        });   
            } else {
                res.json({
                    status: false,
                    msg: 'No tiene productos registrados',
                    data:[]
                });
            }
        } catch (error) {
            res.json(error);
        }
    }

    public async create(req: Request, res: Response) {
        try {
            const saveDataProducto = req.body.producto;
            const sql = `INSERT INTO productos SET ?`;
            const response = await (await db).query(sql, [saveDataProducto]);
            
            if (response.insertId) {
                await productoController.newPrice(req.body.precio,response.insertId);
            }
            res.json({
                status: true,
                msg: 'Producto registrado',
                data: response
            });

        } catch (error) {
            res.json(error);
        }        
    }

    public async update(req: Request, res: Response) {
        try {
            const updateData = [req.body.data, { idproducto: req.body.idproducto }];
            const sql = `UPDATE productos SET ? WHERE ?`;
            const response = await (await db).query(sql,updateData);

            res.json({
                status: true,
                msg: 'Producto Actualizado',
                data: response
            });

        } catch (error) {
            res.json(error);
        }
    }

    public async delete(req: Request, res: Response) {
        try {
            const idproducto = { idproducto: req.body.idproducto };
            const sql = `DELETE FROM productos WHERE ?`;
            const response = await (await db).query(sql, [idproducto]);
            res.json({
                status: true,
                msg: 'Producto eliminado',
                data: response
            });

        } catch (error) {
            res.json(error);
        }
    }

    public async updatePrice(req: Request, res: Response) {
        try {
            const existPrice =await productoController.verifyPrice(req.body.precio, req.body.idproducto);
            var response = null;
            if (!existPrice) {
                response = await productoController.newPrice(req.body.precio, req.body.idproducto);
            } else {
                response = await productoController.activatePrice(req.body.precio, req.body.idproducto);
            }
            res.json({
                status: true,
                msg: 'Precio actualizado',
                data: response
            });
        } catch (error) {
            res.json(error);
        }
    }

    public async newPrice(price: number, idproducto: number) {
        const resDeactivatePrices = await productoController.deactivatePrices(idproducto);
        console.log(resDeactivatePrices);
        const resSavePrice = await productoController.savePrecio(price, idproducto);
        console.log(resSavePrice);
        return resSavePrice;        
    }

    public async verifyPrice(price:number,idproducto:number) {
        const sql = `SELECT * FROM precios WHERE ? AND ? `;
        const response = await (await db).query(sql, [{ precio:price }, { idproducto }]);
        if (response.length>0) {
            return true;
        } else {
            return false;
        }
    }

    public async activatePrice(precio:number,idproducto:number) {
        const resDeactivatePrices = await productoController.deactivatePrices(idproducto);
        const estado = { estado: 1 };
        const id = { idproducto: idproducto };
        const _precio = { precio: precio };
        const sql = `UPDATE precios SET ? WHERE ? AND ?`;
        const response = await (await db).query(sql, [estado, id, _precio]);
        return response;
    }

    public async deactivatePrices(idproducto:number) {
        const estado = { estado: 0 };
        const id = { idproducto: idproducto };
        const sql = `UPDATE precios SET ? WHERE ?`;
        const response = await (await db).query(sql, [estado, id]);
        return response;
    }

    public async savePrecio(precio:number,idproducto:number) {
        const saveData = { precio: precio, idproducto: idproducto };
        const sql = `INSERT INTO precios SET ?`;
        const response = await (await db).query(sql, [saveData]);
        return response;
    }

}

const productoController = new ProductoController();
export default productoController;