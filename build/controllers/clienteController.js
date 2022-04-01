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
const database_1 = __importDefault(require("../database"));
class ClienteController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const saveData = req.body;
                const sql = `INSERT INTO clientes SET ?`;
                const response = yield (yield database_1.default).query(sql, [saveData]);
                res.json({
                    status: true,
                    msg: 'Cliente registrado',
                    data: response
                });
            }
            catch (error) {
                res.json(error);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updateData = [req.body.data, { idcliente: req.body.idcliente }];
                const sql = `UPDATE clientes SET ? Where ?`;
                const response = yield (yield database_1.default).query(sql, updateData);
                res.json({
                    status: true,
                    msg: 'Cliente actualizado',
                    data: response
                });
            }
            catch (error) {
                res.json(error);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const idcliente = { idcliente: req.body.idcliente };
                const sql = `DELETE FROM clientes WHERE ?`;
                const response = yield (yield database_1.default).query(sql, [idcliente]);
                res.json({
                    status: true,
                    msg: 'Cliente eliminado',
                    data: response
                });
            }
            catch (error) {
                res.json(error);
            }
        });
    }
    searchXdni(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dni = { dni: req.body.dni };
                const sql = `SELECT * FROM clientes WHERE ?`;
                const response = yield (yield database_1.default).query(sql, [dni]);
                if (response.length > 0) {
                    res.json({
                        status: true,
                        msg: 'Cliente encontrado',
                        data: response
                    });
                }
                else {
                    res.json({
                        status: false,
                        msg: 'Cliente no encontrado',
                        data: []
                    });
                }
            }
            catch (error) {
                res.json(error);
            }
        });
    }
}
const clienteController = new ClienteController();
exports.default = clienteController;
