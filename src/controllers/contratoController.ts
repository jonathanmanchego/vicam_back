import { Request, Response } from "express";
import Contrato from "../models/contrato";
import EstadoContrato from "../models/estadoContrato";
import Prestamista from "../models/prestamista";
import Solicitud from "../models/solicitud";
var pdf = require('html-pdf');

class ContratoController {
    public async save(req: Request, res: Response) {
        try {
            const dataSave = req.body;
            const dbResponse = await Contrato.create(dataSave);
            res.json({
                status: true,
                msg: 'Registro guardado',
                data:dbResponse
            });
        } catch (error) {
            res.json({
                status: false,
                msg: 'ocurrio un error',
                dataError:error
            });
        }       
    }

    public async getAll(req: Request, res: Response) {
        try {
            const dbResponse = await Contrato.findAll(
            {
                include: [{
                    model: EstadoContrato
                }, {
                    model: Prestamista
                }, {
                    model: Solicitud
                }]
            }
            );
            res.json({
                status: true,
                msg: 'Lista de contratos',
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

    public async contratoPDF() {
        try {
            const htmlPDF = `
                <h1>Título en el PDF creado con el paquete html-pdf</h1>
                <p>Generando un PDF con un HTML sencillo</p>
            `;
            pdf.create(htmlPDF).toFile('./html-pdf.pdf', function(err:any, res:any) {
                if (err){
                    console.log(err);
                } else {
                    console.log(res);
                }
            });

        } catch (error) {
            
        }
    }

}

const contratoController = new ContratoController();
export default contratoController;