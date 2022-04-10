"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cuentaAhorroController_1 = __importDefault(require("../controllers/cuentaAhorroController"));
class CuentaAhorroRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', cuentaAhorroController_1.default.save);
        this.router.delete('/', cuentaAhorroController_1.default.delete);
        this.router.get('/', cuentaAhorroController_1.default.getAll);
    }
}
const cuentaAhorroRoutes = new CuentaAhorroRoutes();
exports.default = cuentaAhorroRoutes.router;
