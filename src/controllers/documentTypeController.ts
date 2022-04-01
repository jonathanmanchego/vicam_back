import { Request, Response } from 'express';
import db from '../database';
import DocumentType from '../models/documentType';

class DocumentTypeController {
    


    public async save(req:Request,res:Response) {
        try {        
            // const documentType = new DocumentType( "OFICIO", "DOCUMENTO HACIA OTRAS ENTIDADES");
            // const response = await documentType.save();
            // const response = req.body;
            const response = await DocumentType.create(
                req.body
            );

            res.json({
                status: true,
                msg: 'registro guardado!',
                data: response
            });
        } catch (error) {
            res.json(error);
        }
    }

    public async update(req: Request, res: Response) {
        try {
            // const documentType = new DocumentType("INFORM","DOCUMENTO PRINCIPAL");
            // const response = await documentType.update();

            const response = await DocumentType.update(
                req.body.data,
                {
                    where: {
                        document_type_id: req.body.document_type_id
                    }
                }
            );

            res.json({
                status: true,
                msg: 'Registro actualizado!!',
                data: response
            });

        } catch (error) {
            res.json(error);
        }
    }


    public async getCategorias(req: Request, res: Response) {
        try {
            const sql = `SELECT * FROM documents_types`;
            const response = await (await db).query(sql);
            
            if (response.length>0) {
                res.json({
                    status: true,
                    msg: 'Lista de categorias',
                    data: response
                });
            } else {
                res.json({
                    status: false,
                    msg: 'No se encontraro categorias',
                    data: response
                });
            }

        } catch (error) {
            res.json(error);
        }
    }

    public async create(req: Request, res: Response) {
        try {
            const saveData = req.body;
            const sql = `INSERT INTO categorias SET ?`;
            const response = await (await db).query(sql, [saveData]);
            
            res.json({
                status: true,
                msg: 'Categoría registrada',
                data: response
            });

        } catch (error) {
            res.json(error);
        }
    }

    public async delete(req: Request, res: Response) {
        try {
            const idcategoria = { idcategoria: req.body.idcategoria };
            const sql = `DELETE FROM categorias WHERE ?`;
            const response = await (await db).query(sql, [idcategoria]);
            
            res.json({
                status: true,
                msg: 'Categoría eliminada',
                data: response
            });
        } catch (error) {
            res.json(error);
        }
    }
}

const documentTypeController = new DocumentTypeController();
export default documentTypeController;