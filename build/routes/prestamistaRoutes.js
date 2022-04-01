"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prestamistaController_1 = __importDefault(require("../controllers/prestamistaController"));
class PrestamistaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/save', prestamistaController_1.default.save);
        this.router.post('/update', prestamistaController_1.default.update);
        this.router.post('/destroy', prestamistaController_1.default.delete);
        this.router.post('/getOne', prestamistaController_1.default.getOne);
        this.router.post('/getAll', prestamistaController_1.default.getAll);
    }
}
const prestamistaRoutes = new PrestamistaRoutes();
exports.default = prestamistaRoutes.router;
