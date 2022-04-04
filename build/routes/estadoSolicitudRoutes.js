"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estadoSolicitudController_1 = __importDefault(require("../controllers/estadoSolicitudController"));
class EstadoSolicitudRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/save', estadoSolicitudController_1.default.save);
        this.router.post('/getAll', estadoSolicitudController_1.default.getAll);
    }
}
const estadoSolicitudRoutes = new EstadoSolicitudRoutes();
exports.default = estadoSolicitudRoutes.router;
