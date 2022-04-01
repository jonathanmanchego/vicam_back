"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ventaController_1 = __importDefault(require("../controllers/ventaController"));
class VentaRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/create', ventaController_1.default.create);
        this.router.post('/delete', ventaController_1.default.delete);
    }
}
const ventaRouter = new VentaRouter();
exports.default = ventaRouter.router;
