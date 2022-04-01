import { Request, Response } from 'express';

import Company from '../models/company';
import Position from '../models/position';

class CompanyController {
    
    public async save(req: Request, res: Response) {
        try {
            const dataSave = {
                company_name: req.body.company_name,
                company_address: req.body.company_address,
                company_telf1: req.body.company_telf1,
                company_telf2: req.body.company_telf2,
                company_telf3: req.body.company_telf3
            };
            const response = await Company.create(dataSave);
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

            const dataUpdate = {
                company_name: req.body.company_name,
                company_address: req.body.company_address,
                company_telf1: req.body.company_telf1,
                company_telf2: req.body.company_telf2,
                company_telf3: req.body.company_telf3
            };
            const id = { company_id: req.body.company_id };

            const response = await Company.update(
                dataUpdate, { where: id }
                // {
                //     where: {
                //         company_id: req.body.company_id
                //     }
                // }
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
}

const companyController = new CompanyController();
export default companyController;