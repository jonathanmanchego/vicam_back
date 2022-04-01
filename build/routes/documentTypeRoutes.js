"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const documentTypeController_1 = __importDefault(require("../controllers/documentTypeController"));
class DocumentTypeRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/getCategorias', documentTypeController_1.default.getCategorias);
        this.router.post('/create', documentTypeController_1.default.create);
        this.router.post('/update', documentTypeController_1.default.update);
        this.router.post('/delete', documentTypeController_1.default.delete);
        this.router.post('/save', documentTypeController_1.default.save);
    }
}
const documentTypeRoutes = new DocumentTypeRoutes();
exports.default = documentTypeRoutes.router;
