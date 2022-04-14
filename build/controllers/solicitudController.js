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
const cuentaAhorro_1 = __importDefault(require("../models/cuentaAhorro"));
const empleado_1 = __importDefault(require("../models/empleado"));
const estadoSolicitud_1 = __importDefault(require("../models/estadoSolicitud"));
const plazoPago_1 = __importDefault(require("../models/plazoPago"));
const prestamista_1 = __importDefault(require("../models/prestamista"));
const solicitud_1 = __importDefault(require("../models/solicitud"));
const tarjeta_1 = __importDefault(require("../models/tarjeta"));
class SolicitudController {
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dataSave = req.body;
                const dbResponse = yield solicitud_1.default.create(dataSave);
                res.json({
                    status: true,
                    msg: "Registro guardado",
                    data: dbResponse,
                });
            }
            catch (error) {
                res.status(402).json({
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
                const dbResponse = yield solicitud_1.default.update(dataUpdate, { where: id });
                console.log(dbResponse[0]);
                var dataResponse = {};
                if (dbResponse[0] != 0) {
                    dataResponse = {
                        status: true,
                        msg: 'Solicitud actualizada',
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
                console.log(req.query);
                if (Object.keys(req.query).length != 0) {
                    solicitudController.getByParams(req, res);
                }
                else {
                    const dbResponse = yield solicitud_1.default.findAll({
                        include: [
                            {
                                model: prestamista_1.default,
                                as: 'prestamista'
                            },
                            {
                                model: cuentaAhorro_1.default,
                                as: 'cuenta_ahorro'
                            },
                            {
                                model: banco_1.default,
                                as: 'banco'
                            },
                            {
                                model: estadoSolicitud_1.default,
                                as: 'estado_solicitud'
                            },
                            {
                                model: tarjeta_1.default,
                                as: 'tarjeta'
                            },
                            {
                                model: plazoPago_1.default,
                                as: 'plazo_pago'
                            },
                            {
                                model: empleado_1.default,
                                as: 'empleado'
                            }
                        ],
                    });
                    res.json({
                        status: true,
                        msg: "Registros de Solicitudes sin params",
                        data: dbResponse,
                    });
                }
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
    getByParams(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const paramsWhere = req.query;
                const dbResponse = yield solicitud_1.default.findAll({
                    include: [
                        {
                            model: prestamista_1.default,
                            as: 'prestamista'
                        },
                        {
                            model: cuentaAhorro_1.default,
                            as: 'cuenta_ahorro'
                        },
                        {
                            model: banco_1.default,
                            as: 'banco'
                        },
                        {
                            model: estadoSolicitud_1.default,
                            as: 'estado_solicitud'
                        },
                        {
                            model: tarjeta_1.default,
                            as: 'tarjeta'
                        },
                        {
                            model: plazoPago_1.default,
                            as: 'plazo_pago'
                        },
                        {
                            model: empleado_1.default,
                            as: 'empleado'
                        }
                    ],
                    where: paramsWhere
                });
                var dataResponse = {};
                if (dbResponse.length == 0) {
                    dataResponse = {
                        status: true,
                        msg: "No se encontraron registros de solicitudes con params",
                        data: dbResponse,
                    };
                }
                else {
                    dataResponse = {
                        status: true,
                        msg: "Registros de solicitudes con params",
                        data: dbResponse,
                    };
                }
                res.json(dataResponse);
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
}
const solicitudController = new SolicitudController();
exports.default = solicitudController;
