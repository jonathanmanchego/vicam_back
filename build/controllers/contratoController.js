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
const banco_1 = __importDefault(require("../models/banco"));
const contrato_1 = __importDefault(require("../models/contrato"));
const cuentaAhorro_1 = __importDefault(require("../models/cuentaAhorro"));
const departamento_1 = __importDefault(require("../models/departamento"));
const estadoContrato_1 = __importDefault(require("../models/estadoContrato"));
const localia_1 = __importDefault(require("../models/localia"));
const plazoPago_1 = __importDefault(require("../models/plazoPago"));
const prestamista_1 = __importDefault(require("../models/prestamista"));
const provincia_1 = __importDefault(require("../models/provincia"));
const solicitud_1 = __importDefault(require("../models/solicitud"));
const tarjeta_1 = __importDefault(require("../models/tarjeta"));
const contratoToPDF_1 = __importDefault(require("../helpers/contratoToPDF"));
class ContratoController {
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dataSave = req.body;
                const dbResponse = yield contrato_1.default.create(dataSave);
                const id = dbResponse.getDataValue('id');
                const contrato_numero = { contrato_numero: id };
                yield contrato_1.default.update(contrato_numero, { where: { id: id } });
                const dbResponse2 = yield contrato_1.default.findByPk(id);
                res.json({
                    status: true,
                    msg: "Registro guardado",
                    data: dbResponse2,
                });
            }
            catch (error) {
                res.json({
                    status: false,
                    msg: "ocurrio un error",
                    dataError: error,
                });
            }
        });
    }
    generarContrato(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const solicitud_id = { id: req.params.solicitud_id };
                const dbResponse = yield solicitud_1.default.findAll({
                    include: [{
                            model: plazoPago_1.default,
                            as: 'plazo_pago'
                        }],
                    where: solicitud_id
                });
                const solicitud = dbResponse[0].toJSON();
                var contrato = {
                    prestamista_id: solicitud.prestamista_id,
                    estado_contrato_id: 1,
                    solicitud_id: solicitud.id,
                    cuenta_ahorro_id: solicitud.cuenta_ahorro_id,
                    tarjeta_id: solicitud.tarjeta_id,
                    banco_id: solicitud.banco_id,
                    contrato_monto_prestamo: Number(solicitud.solicitud_monto),
                    contrato_monto_interes: 0,
                    contrato_monto_total_pago: 0,
                    contrato_tasa_interes: Number(solicitud.plazo_pago.plazo_pago_tasa_interes)
                };
                contrato.contrato_monto_interes = solicitud.solicitud_monto * solicitud.plazo_pago.plazo_pago_tasa_interes;
                contrato.contrato_monto_total_pago = contrato.contrato_monto_prestamo + contrato.contrato_monto_interes;
                const dbResponse2 = yield contrato_1.default.create(contrato);
                const contrato_id = dbResponse2.getDataValue('id');
                const contrato_numero = { contrato_numero: contrato_id };
                const estado_solicitud = { estado_solicitud_id: 2 };
                yield contrato_1.default.update(contrato_numero, { where: { id: contrato_id } });
                yield solicitud_1.default.update(estado_solicitud, { where: { id: solicitud.id } });
                const dbResponse3 = yield contrato_1.default.findByPk(contrato_id);
                res.json({
                    status: true,
                    msg: 'okk!!',
                    data: dbResponse3
                });
            }
            catch (error) {
                res.status(400).json({
                    status: false,
                    msg: "ocurrio un error",
                    dataError: error,
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = { id: req.params.id };
                const dataUpdate = req.body;
                const dbResponse = yield contrato_1.default.update(dataUpdate, { where: id });
                console.log(dbResponse[0]);
                var dataResponse = {};
                if (dbResponse[0] != 0) {
                    dataResponse = {
                        status: true,
                        msg: 'Contrato actualizado',
                        data: dbResponse
                    };
                }
                else {
                    dataResponse = {
                        status: true,
                        msg: 'Los campos no se modificaron',
                        data: dbResponse
                    };
                }
                res.json(dataResponse);
            }
            catch (error) {
                res.status(400).json({
                    status: false,
                    msg: 'ocurrio un error',
                    dataError: error
                });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dbResponse = yield contrato_1.default.findAll({
                    include: [
                        {
                            model: estadoContrato_1.default,
                            as: 'estado_contrato'
                        },
                        {
                            model: prestamista_1.default,
                            as: 'prestamista'
                        },
                        {
                            model: cuentaAhorro_1.default,
                            as: 'cuenta_ahorro'
                        },
                        {
                            model: tarjeta_1.default,
                            as: 'tarjeta'
                        },
                        {
                            model: banco_1.default,
                            as: 'banco'
                        }
                    ],
                });
                res.json({
                    status: true,
                    msg: "Lista de contratos",
                    data: dbResponse,
                });
            }
            catch (error) {
                res.json({
                    status: false,
                    msg: "ocurrio un error!",
                    dataError: error,
                });
            }
        });
    }
    getContratoByPk(pk) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = { id: pk };
            const dbResponse = yield contrato_1.default.findAll({
                include: [
                    {
                        model: estadoContrato_1.default,
                        as: 'estado_contrato'
                    },
                    {
                        model: prestamista_1.default,
                        as: 'prestamista',
                        include: [{
                                model: localia_1.default,
                                as: 'localia'
                            },
                            {
                                model: provincia_1.default,
                                as: 'provincia'
                            },
                            {
                                model: departamento_1.default,
                                as: 'departamento'
                            }
                        ]
                    },
                    {
                        model: cuentaAhorro_1.default,
                        as: 'cuenta_ahorro'
                    },
                    {
                        model: tarjeta_1.default,
                        as: 'tarjeta'
                    },
                    {
                        model: banco_1.default,
                        as: 'banco'
                    }
                ],
                where: id
            });
            return dbResponse;
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dbResponse = yield contratoController.getContratoByPk(req.params.id);
                res.json({
                    status: true,
                    msg: "Información del contrato",
                    data: dbResponse,
                });
            }
            catch (error) {
                res.status(400).json({
                    status: false,
                    msg: "ocurrio un error!",
                    dataError: error,
                });
            }
        });
    }
    contratoPDF(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // const id = req.params.id;
                const dbResponse = yield contratoController.getContratoByPk(req.params.id);
                const contrato = (dbResponse[0].toJSON());
                console.log(contrato);
                // const doc = new pdfKit;
                // doc.pipe(fs.createWriteStream('file.pdf'));
                // doc.text(``)
                // doc.end();
                contratoToPDF_1.default.getContratoPDF(contrato);
                res.json({
                    status: true,
                    msg: 'okk!!!',
                    data: contrato
                });
            }
            catch (error) {
                res.json({
                    status: false,
                    data: error
                });
            }
        });
    }
}
const contratoController = new ContratoController();
exports.default = contratoController;
