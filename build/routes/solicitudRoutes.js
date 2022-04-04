"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const solicitudController_1 = __importDefault(require("../controllers/solicitudController"));
class SolicitudRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/save', solicitudController_1.default.save);
        this.router.post('/getAll', solicitudController_1.default.getAll);
    }
}
const solicitudRoutes = new SolicitudRoutes();
exports.default = solicitudRoutes.router;
