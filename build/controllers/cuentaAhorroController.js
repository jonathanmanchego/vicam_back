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
const cuentaAhorro_1 = __importDefault(require("../models/cuentaAhorro"));
class CuentaAhorroController {
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dataSave = {
                    tarjeta_id: req.body.tarjeta_id,
                    prestamista_id: req.body.prestamista_id,
                    banco_id: req.body.banco_id,
                    cuenta_numero: req.body.cuenta_numero
                };
                const dbResponse = yield cuentaAhorro_1.default.create(dataSave);
                const dataResponse = {
                    status: true,
                    msg: 'Registro guardado',
                    data: dbResponse
                };
                res.json(dataResponse);
            }
            catch (error) {
                const dataErrorResponse = {
                    status: false,
                    msg: 'Ocurrio un error!',
                    dataError: error
                };
                res.json(dataErrorResponse);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = { cuenta_ahorro_id: req.body.cuenta_ahorro_id };
                const dataUpdate = {
                    tarjeta_id: req.body.tarjeta_id,
                    prestamista_id: req.body.prestamista_id,
                    banco_id: req.body.banco_id,
                    cuenta_numero: req.body.cuenta_numero
                };
                const dbResponse = yield cuentaAhorro_1.default.update(dataUpdate, { where: id });
                const dataResponse = {
                    status: true,
                    msg: 'Registro actualizado',
                    data: dbResponse
                };
                res.json(dataResponse);
            }
            catch (error) {
                const dataErrorResponse = {
                    status: false,
                    msg: 'Ocurrio un error!',
                    dataError: error
                };
                res.json(dataErrorResponse);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = { cuenta_ahorro_id: req.body.cuenta_ahorro_id };
                const dbResponse = yield cuentaAhorro_1.default.destroy({ where: id });
                const dataResponse = {
                    status: true,
                    msg: 'Registro eliminado',
                    data: dbResponse
                };
                res.json(dataResponse);
            }
            catch (error) {
                const dataErrorResponse = {
                    status: false,
                    msg: 'Ocurrio un error!',
                    data: error
                };
                res.json(dataErrorResponse);
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dbResponse = yield cuentaAhorro_1.default.findByPk(req.body.cuenta_ahorro_id);
                const dataResponse = {
                    status: true,
                    msg: 'Datos de cuenta',
                    data: dbResponse
                };
                res.json(dataResponse);
            }
            catch (error) {
                const dataErrorResponse = {
                    status: false,
                    msg: 'Ocurrio un error!',
                    dataError: error
                };
                res.json(dataErrorResponse);
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dbResponse = yield cuentaAhorro_1.default.findAll();
                const dataResponse = {
                    status: true,
                    msg: 'Lista de cuentas',
                    data: dbResponse
                };
                res.json(dataResponse);
            }
            catch (error) {
                const dataErrorResponse = {
                    status: false,
                    msg: 'Ocurrio un error!',
                    dataError: error
                };
                res.json(dataErrorResponse);
            }
        });
    }
}
const cuentaAhorroController = new CuentaAhorroController();
exports.default = cuentaAhorroController;
