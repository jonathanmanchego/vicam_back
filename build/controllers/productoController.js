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
class ProductoController {
    getProductos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = `select *,
                            (select categoria from categorias where idcategoria=p.idcategoria) as categoria,
                            (select idprecio from precios where idproducto=p.idproducto and estado=1) as idprecio,
                            (select precio from precios where idproducto=p.idproducto and estado=1) as precio
                        from productos as p`;
                const response = yield (yield database_1.default).query(sql);
                if (response.length > 0) {
                    res.json({
                        status: true,
                        msg: 'Lista de productos',
                        data: response
                    });
                }
                else {
                    res.json({
                        status: false,
                        msg: 'No tiene productos registrados',
                        data: []
                    });
                }
            }
            catch (error) {
                res.json(error);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const saveDataProducto = req.body.producto;
                const sql = `INSERT INTO productos SET ?`;
                const response = yield (yield database_1.default).query(sql, [saveDataProducto]);
                if (response.insertId) {
                    yield productoController.newPrice(req.body.precio, response.insertId);
                }
                res.json({
                    status: true,
                    msg: 'Producto registrado',
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
                const updateData = [req.body.data, { idproducto: req.body.idproducto }];
                const sql = `UPDATE productos SET ? WHERE ?`;
                const response = yield (yield database_1.default).query(sql, updateData);
                res.json({
                    status: true,
                    msg: 'Producto Actualizado',
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
                const idproducto = { idproducto: req.body.idproducto };
                const sql = `DELETE FROM productos WHERE ?`;
                const response = yield (yield database_1.default).query(sql, [idproducto]);
                res.json({
                    status: true,
                    msg: 'Producto eliminado',
                    data: response
                });
            }
            catch (error) {
                res.json(error);
            }
        });
    }
    updatePrice(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existPrice = yield productoController.verifyPrice(req.body.precio, req.body.idproducto);
                var response = null;
                if (!existPrice) {
                    response = yield productoController.newPrice(req.body.precio, req.body.idproducto);
                }
                else {
                    response = yield productoController.activatePrice(req.body.precio, req.body.idproducto);
                }
                res.json({
                    status: true,
                    msg: 'Precio actualizado',
                    data: response
                });
            }
            catch (error) {
                res.json(error);
            }
        });
    }
    newPrice(price, idproducto) {
        return __awaiter(this, void 0, void 0, function* () {
            const resDeactivatePrices = yield productoController.deactivatePrices(idproducto);
            console.log(resDeactivatePrices);
            const resSavePrice = yield productoController.savePrecio(price, idproducto);
            console.log(resSavePrice);
            return resSavePrice;
        });
    }
    verifyPrice(price, idproducto) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `SELECT * FROM precios WHERE ? AND ? `;
            const response = yield (yield database_1.default).query(sql, [{ precio: price }, { idproducto }]);
            if (response.length > 0) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    activatePrice(precio, idproducto) {
        return __awaiter(this, void 0, void 0, function* () {
            const resDeactivatePrices = yield productoController.deactivatePrices(idproducto);
            const estado = { estado: 1 };
            const id = { idproducto: idproducto };
            const _precio = { precio: precio };
            const sql = `UPDATE precios SET ? WHERE ? AND ?`;
            const response = yield (yield database_1.default).query(sql, [estado, id, _precio]);
            return response;
        });
    }
    deactivatePrices(idproducto) {
        return __awaiter(this, void 0, void 0, function* () {
            const estado = { estado: 0 };
            const id = { idproducto: idproducto };
            const sql = `UPDATE precios SET ? WHERE ?`;
            const response = yield (yield database_1.default).query(sql, [estado, id]);
            return response;
        });
    }
    savePrecio(precio, idproducto) {
        return __awaiter(this, void 0, void 0, function* () {
            const saveData = { precio: precio, idproducto: idproducto };
            const sql = `INSERT INTO precios SET ?`;
            const response = yield (yield database_1.default).query(sql, [saveData]);
            return response;
        });
    }
}
const productoController = new ProductoController();
exports.default = productoController;
