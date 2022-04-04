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
        this.router.post('/save', contratoController_1.default.save);
        this.router.post('/getAll', contratoController_1.default.getAll);
    }
}
const contratoRoutes = new ContratoRoutes();
exports.default = contratoRoutes.router;
