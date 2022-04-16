"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contrato_1 = __importDefault(require("../models/contrato"));
const detallePago_1 = __importDefault(require("../models/detallePago"));
const pago_1 = __importDefault(require("../models/pago"));
const plazoPago_1 = __importDefault(require("../models/plazoPago"));
const solicitud_1 = __importDefault(require("../models/solicitud"));
class PagoController {
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dataSave = req.body;
                const dbResponse = yield pago_1.default.create(dataSave);
                res.json({
                    status: true,
                    msg: 'Registro guardado',
                    data: dbResponse
                });
            }
            catch (error) {
                res.json({
                    status: false,
                    msg: 'ocurrio un error',
                    dataError: error
                });
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
            }
        });
    }
    generarPago(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const contrato_id = { id: req.params.contrato_id };
                const dbResponse = yield contrato_1.default.findAll({
                    include: [{
                            model: solicitud_1.default,
                            as: 'solicitud',
                            include: [{
                                    model: plazoPago_1.default,
                                    as: 'plazo_pago'
                                }]
                        }],
                    where: contrato_id
                });
                const contrato = dbResponse[0].toJSON();
                const detalles = yield pagoController.generarDetallesPago(contrato);
                console.log(detalles);
                const pagoSave = {
                    plazo_pago_id: 1,
                    prestamista_id: contrato.prestamista_id,
                    contrato_id: contrato.id,
                    pago_fecha_inicio: contrato.contrato_dia_inicio,
                    pago_fecha_fin: contrato.contrato_dia_fin,
                    pago_monto_capital: contrato.contrato_monto_prestamo,
                    pago_monto_interes: contrato.contrato_monto_interes,
                    pago_tasa_interes: 0.0,
                    detalle_pago: detalles
                };
                const dbResponse2 = yield pago_1.default.create(pagoSave, { include: [{ model: detallePago_1.default, as: 'detalle_pago' }] });
                res.json(dbResponse2);
            }
            catch (error) {
                res.status(400).json({
                    status: false,
                    dataError: error
                });
            }
        });
    }
    generarDetallesPago(contrato) {
        return __awaiter(this, void 0, void 0, function* () {
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
            for (let i = 0; i < num_cuotas; i++) {
                fechas[i] = fecha_limite.setDate(fecha_limite.getDate() + dias_cuota);
                var detalle = {
                    ep_id: 1,
                    dp_numero: i + 1,
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
        });
    }
}
const pagoController = new PagoController();
exports.default = pagoController;
