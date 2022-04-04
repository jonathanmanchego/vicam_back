"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pagoController_1 = __importDefault(require("../controllers/pagoController"));
class PagoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/save', pagoController_1.default.save);
    }
}
const pagoRoutes = new PagoRoutes();
exports.default = pagoRoutes.router;
