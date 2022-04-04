"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bancoController_1 = __importDefault(require("../controllers/bancoController"));
class BancoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/getBancos', bancoController_1.default.getBancos);
    }
}
const bancoRoutes = new BancoRoutes();
exports.default = bancoRoutes.router;
