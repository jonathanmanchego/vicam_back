"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productoController_1 = __importDefault(require("../controllers/productoController"));
class ProductoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/create', productoController_1.default.create);
        this.router.post('/updatePrice', productoController_1.default.updatePrice);
        this.router.post('/update', productoController_1.default.update);
        this.router.post('/delete', productoController_1.default.delete);
        this.router.post('/getProductos', productoController_1.default.getProductos);
    }
}
const productoRoutes = new ProductoRoutes();
exports.default = productoRoutes.router;
