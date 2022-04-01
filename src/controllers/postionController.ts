import { Request, Response } from "express";

import Position from "../models/position";
import Company from "../models/company";

class PositionController {

    public async save(req:Request,res:Response) {
        try {
            const dataSave = {
                company_id: req.body.company_id,
                position_name: req.body.position_name,
                position_description: req.body.position_description,
                state_db: 1,
            };
            const response = await Position.create(dataSave);
            res.json({
                status: true,
                msg: 'registro guardado!',
                data: response
            });
        } catch (error) {
            res.json(error);
        }
    }

    public async getPositions(req: Request, res: Response) {
        try {
            const response = await Position.findAll({
                include: {
                    model: Company
                }
            });
            res.json({
                status: true,
                msg: 'Lista de Positions',
                data: response
            });
        } catch (error) {
            res.json(error);
        }        
    }
}

const positionController = new PositionController();
export default positionController;