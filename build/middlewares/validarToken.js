"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
///hohoho
const validarToken = (req, res, next) => {
    const token = req.header('auth-jwt');
    if (!token) {
        res.json({
            status: false,
            msg: 'Acceso denegado',
            data: []
        });
    }
    else {
        jsonwebtoken_1.default.verify(token, 'token-jwt', (error, dataToken) => {
            if (error) {
                // res.status(403).json({
                res.json({
                    status: false,
                    msg: 'Acceso denegado'
                });
            }
            else {
                req.user = dataToken.user;
                next();
            }
        });
    }
};
exports.validarToken = validarToken;
