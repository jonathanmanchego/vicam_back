"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estadoContratoController_1 = __importDefault(require("../controllers/estadoContratoController"));
class EstadoContratoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', estadoContratoController_1.default.save);
        this.router.get('/', estadoContratoController_1.default.getAll);
    }
}
const estadoContratoRoutes = new EstadoContratoRoutes();
exports.default = estadoContratoRoutes.router;
