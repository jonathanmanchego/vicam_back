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
        this.router.get('/', prestamistaController_1.default.getAll);
        this.router.post('/', prestamistaController_1.default.save);
        this.router.put('/:id', prestamistaController_1.default.update);
        this.router.delete('/:id', prestamistaController_1.default.delete);
        this.router.get('/:id', prestamistaController_1.default.getOne);
    }
}
const prestamistaRoutes = new PrestamistaRoutes();
exports.default = prestamistaRoutes.router;
