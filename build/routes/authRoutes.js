"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = __importDefault(require("../controllers/authController"));
const validarToken_1 = require("../middlewares/validarToken");
class AuthRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/create', authController_1.default.create);
        this.router.post('/login', authController_1.default.login);
        this.router.post('/token-verify', validarToken_1.validarToken, authController_1.default.tokenVerify);
    }
}
const authRoutes = new AuthRoutes();
exports.default = authRoutes.router;
