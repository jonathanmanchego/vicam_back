"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const plazoPagoController_1 = __importDefault(require("../controllers/plazoPagoController"));
class PlazoPagoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/save', plazoPagoController_1.default.save);
        this.router.get('/', plazoPagoController_1.default.getAll);
    }
}
const plazoPagoRoutes = new PlazoPagoRoutes();
exports.default = plazoPagoRoutes.router;
