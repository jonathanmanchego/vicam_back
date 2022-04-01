import { Request, Response } from 'express';
import db from '../database';

class IndexController {

    async index(req: Request, res: Response) {
        
        const sql = `SELECT * FROM documents_types `;
        const response = await(await db).query(sql);
        res.json({
            status: true,
            msg: 'index Ok new modulo',
            data: response
            
        });
        
    }

}

export const indexController = new IndexController();