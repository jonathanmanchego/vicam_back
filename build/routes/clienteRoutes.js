"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clienteController_1 = __importDefault(require("../controllers/clienteController"));
class ClienteRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/create', clienteController_1.default.create);
        this.router.post('/update', clienteController_1.default.update);
        this.router.post('/delete', clienteController_1.default.delete);
        this.router.post('/searchXdni', clienteController_1.default.searchXdni);
    }
}
const clienteRoutes = new ClienteRoutes();
exports.default = clienteRoutes.router;
