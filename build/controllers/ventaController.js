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
class VentaController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const saveDataVenta = req.body.venta;
                const sql = `INSERT INTO ventas SET ?`;
                const response = yield (yield database_1.default).query(sql, [saveDataVenta]);
                if (response.insertId > 0) {
                    const saveDataDetallesVenta = req.body.detallesVenta;
                    yield ventaController.saveDetalles(response.insertId, saveDataDetallesVenta);
                    res.json({
                        status: true,
                        msg: 'Venta realizada',
                        data: response
                    });
                }
                else {
                    res.json({
                        status: false,
                        msg: 'La venta no se realizó',
                        data: response
                    });
                }
            }
            catch (error) {
                res.json(error);
            }
        });
    }
    saveDetalles(idventa, detalles) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(idventa);
            console.log(detalles);
            const sql2 = `INSERT INTO detalles_ventas SET ?`;
            for (let i = 0; i < detalles.length; i++) {
                detalles[i].idventa = idventa;
                yield (yield database_1.default).query(sql2, [detalles[i]]);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const idventa = { idventa: req.body.idventa };
                const sql1 = `DELETE FROM detalles_ventas WHERE ?`;
                const sql2 = `DELETE FROM ventas WHERE ?`;
                const response1 = yield (yield database_1.default).query(sql1, [idventa]);
                const response2 = yield (yield database_1.default).query(sql2, [idventa]);
                res.json({
                    status: true,
                    msg: 'La venta fue eliminada',
                    data: response2
                });
            }
            catch (error) {
                res.json(error);
            }
        });
    }
}
const ventaController = new VentaController();
exports.default = ventaController;
