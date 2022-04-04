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
const prestamista_1 = __importDefault(require("../models/prestamista"));
const solicitud_1 = __importDefault(require("../models/solicitud"));
class SolicitudController {
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dataSave = req.body;
                const dbResponse = yield solicitud_1.default.create(dataSave);
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
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dbResponse = yield solicitud_1.default.findAll({
                    include: [{
                            model: prestamista_1.default
                        }, {
                            model: cuentaAhorro_1.default,
                        }, {
                            model: banco_1.default
                        }
                    ]
                });
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
}
const solicitudController = new SolicitudController();
exports.default = solicitudController;
