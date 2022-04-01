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
const tarjeta_1 = __importDefault(require("../models/tarjeta"));
class TarjetaController {
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dataSave = {
                    prestamista_id: req.body.prestamista_id,
                    banco_id: req.body.banco_id,
                    tarjeta_num: req.body.tarjeta_num
                };
                const dbResponse = yield tarjeta_1.default.create(dataSave);
                const dataResponse = {
                    stauts: true,
                    msg: 'Registro guardado',
                    data: dbResponse
                };
                res.json(dataResponse);
            }
            catch (error) {
                const dataErrorResponse = {
                    status: false,
                    msg: 'Ocurrio un error!!',
                    dataError: error
                };
                res.json(dataErrorResponse);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = { tarjeta_id: req.body.tarjeta_id };
                const dbResponse = yield tarjeta_1.default.destroy({ where: { id } });
                const dataResponse = {
                    stauts: true,
                    msg: 'Registro eliminado',
                    data: dbResponse
                };
                res.json(dataResponse);
            }
            catch (error) {
                const dataErrorResponse = {
                    status: false,
                    msg: 'Ocurrio un error!!',
                    dataError: error
                };
                res.json(dataErrorResponse);
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.body.tarjeta_id;
                const dbResponse = yield tarjeta_1.default.findByPk(id);
                const dataResponse = {
                    stauts: true,
                    msg: 'Registro eliminado',
                    data: dbResponse
                };
                res.json(dataResponse);
            }
            catch (error) {
                const dataErrorResponse = {
                    status: false,
                    msg: 'Ocurrio un error!!',
                    dataError: error
                };
                res.json(dataErrorResponse);
            }
        });
    }
}
const tarjetaController = new TarjetaController();
exports.default = tarjetaController;
