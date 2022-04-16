import { Request, Response } from 'express';
import Contrato from '../models/contrato';
import DetallePago from '../models/detallePago';
import Pago from '../models/pago';
import PlazoPago from '../models/plazoPago';
import Solicitud from '../models/solicitud';

class PagoController {
    
    public async save(req: Request, res: Response) {
        try {
            const dataSave = req.body;
            const dbResponse = await Pago.create(dataSave);
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

    public async getAll() {
        try {
            
        } catch (error) {
            
        }
    }

    public async generarPago(req: Request, res: Response) {
        try {
            const contrato_id = { id: req.params.contrato_id };
            const dbResponse = await Contrato.findAll({
                include: [{
                    model: Solicitud,
                    as: 'solicitud',
                    include:[{
                        model: PlazoPago,
                        as: 'plazo_pago'
                    }]
                }],
                where: contrato_id
            });
            const contrato = dbResponse[0].toJSON();
            
            const detalles = await pagoController.generarDetallesPago(contrato);
            console.log(detalles);
            
            const pagoSave = {
                plazo_pago_id:1,
                prestamista_id: contrato.prestamista_id,
                contrato_id: contrato.id,
                pago_fecha_inicio: contrato.contrato_dia_inicio,
                pago_fecha_fin: contrato.contrato_dia_fin,
                pago_monto_capital: contrato.contrato_monto_prestamo,
                pago_monto_interes: contrato.contrato_monto_interes,
                pago_tasa_interes: 0.0,
                detalle_pago:
                    detalles
            };
            const dbResponse2 = await Pago.create(pagoSave,{include:[{model:DetallePago,as:'detalle_pago'}]});
            res.json(dbResponse2);
        } catch (error) {
            res.status(400).json({
                status: false,
                dataError: error
            });
        }        
    }

    public async generarDetallesPago(contrato: any) {
        const dias_cuota = 30;
        const num_cuotas = Math.round(contrato.contrato_dias_prestamo / dias_cuota);
        var fecha_limite = new Date(contrato.contrato_dia_inicio);
        // fecha_limite.setDate(fecha_limite.getDate() + dias_cuota);
        // console.log(fecha_limite);
        const monto_capital = contrato.contrato_monto_prestamo / num_cuotas;
        const monto_interes = contrato.contrato_monto_interes / num_cuotas;
        var detalles = [];
        var fechas = [];
        var dif_total = contrato.contrato_monto_prestamo - (num_cuotas * Number(monto_capital.toFixed(1)));
        var dif_interes = contrato.contrato_monto_interes - (num_cuotas * Number(monto_interes.toFixed(1)));

        for (let i = 0; i < num_cuotas; i++){
            fechas[i]=fecha_limite.setDate(fecha_limite.getDate() + dias_cuota);
            var detalle = {
                ep_id: 1,
                dp_numero: i+1,
                dp_fecha_limite: new Date(fechas[i]),
                dp_monto_capital: Number(monto_capital.toFixed(1)),
                dp_monto_interes: Number(monto_interes.toFixed(1)),
                dp_monto_penalidad: 0.0
            };
            detalles.push(detalle);
        }
        detalles[num_cuotas - 1].dp_monto_capital = Number((Number(detalles[num_cuotas - 1].dp_monto_capital) + dif_total).toFixed(1));
        detalles[num_cuotas - 1].dp_monto_interes = Number((Number(detalles[num_cuotas - 1].dp_monto_interes) + dif_interes).toFixed(1));
        
        return detalles;
    }

}

const pagoController = new PagoController();
export default pagoController;