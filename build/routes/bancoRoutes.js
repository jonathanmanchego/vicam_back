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
        this.router.get('/', bancoController_1.default.getAll);
        this.router.get('/:id', bancoController_1.default.getOne);
        this.router.post('/', bancoController_1.default.save);
        this.router.put('/', bancoController_1.default.getAll);
        this.router.delete('/:id', bancoController_1.default.getAll);
    }
}
const bancoRoutes = new BancoRoutes();
exports.default = bancoRoutes.router;
