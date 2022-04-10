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
const estadoContrato_1 = __importDefault(require("../models/estadoContrato"));
const prestamista_1 = __importDefault(require("../models/prestamista"));
const solicitud_1 = __importDefault(require("../models/solicitud"));
var pdf = require('html-pdf');
class ContratoController {
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dataSave = req.body;
                const dbResponse = yield contrato_1.default.create(dataSave);
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
                const dbResponse = yield contrato_1.default.findAll({
                    include: [{
                            model: estadoContrato_1.default
                        }, {
                            model: prestamista_1.default
                        }, {
                            model: solicitud_1.default
                        }]
                });
                res.json({
                    status: true,
                    msg: 'Lista de contratos',
                    data: dbResponse
                });
            }
            catch (error) {
                res.json({
                    status: false,
                    msg: 'ocurrio un error!',
                    dataError: error
                });
            }
        });
    }
    contratoPDF() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const htmlPDF = `
                <h1>Título en el PDF creado con el paquete html-pdf</h1>
                <p>Generando un PDF con un HTML sencillo</p>
            `;
                pdf.create(htmlPDF).toFile('./html-pdf.pdf', function (err, res) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(res);
                    }
                });
            }
            catch (error) {
            }
        });
    }
}
const contratoController = new ContratoController();
exports.default = contratoController;
