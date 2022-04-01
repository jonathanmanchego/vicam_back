"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uploadController_1 = __importDefault(require("../controllers/uploadController"));
const subirArchivo_1 = require("../middlewares/subirArchivo");
class UploadRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/save', subirArchivo_1.subirImagen, uploadController_1.default.save);
    }
}
const uploadRoutes = new UploadRoutes();
exports.default = uploadRoutes.router;
