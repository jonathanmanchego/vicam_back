"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contratoController_1 = __importDefault(require("../controllers/contratoController"));
class ContratoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', contratoController_1.default.save);
        this.router.get('/', contratoController_1.default.getAll);
        this.router.get('/:id', contratoController_1.default.getOne);
        this.router.get('/generar-contrato/:solicitud_id', contratoController_1.default.generarContrato);
        this.router.get('/PDF/:id', contratoController_1.default.contratoPDF);
    }
}
const contratoRoutes = new ContratoRoutes();
exports.default = contratoRoutes.router;
