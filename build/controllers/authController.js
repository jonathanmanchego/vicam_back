"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class AuthController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                console.log(req.body);
                console.log(data);
                if (!(yield authController.verifyDNI(data.dni))) {
                    data.password = yield authController.encryptPasword(data.password);
                    const sql = `INSERT INTO users SET ?`;
                    const response = yield (yield database_1.default).query(sql, data);
                    res.json({
                        status: true,
                        msg: 'El usuario se registro correctamente',
                        data: response
                    });
                }
                else {
                    res.json({
                        status: false,
                        msg: 'Su email se encuentra ya registrado!',
                        data: []
                    });
                }
            }
            catch (error) {
                res.json(error);
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const dni = req.body.dni;
            const password = req.body.password;
            const sql = `SELECT * FROM users WHERE dni=?`;
            const response = yield (yield database_1.default).query(sql, [dni]);
            if (response.length > 0) {
                const passOk = yield authController.validatePassword(password, response[0].password);
                if (passOk) {
                    const user = response[0];
                    user.password = '';
                    const token = jsonwebtoken_1.default.sign({ user }, 'token-jwt', { expiresIn: 60 * 10 });
                    user.token = token;
                    res.header('auth-jwt', token).json({
                        status: true,
                        msg: 'Acceso Ok!',
                        data: user
                    });
                }
                else {
                    res.json({
                        status: false,
                        msg: 'Contraseña incorrecta, acceso denegado!',
                        data: []
                    });
                }
            }
            else {
                res.json({
                    status: false,
                    msg: 'Usuario incorrecto, acceso denegado!!',
                    data: []
                });
            }
        });
    }
    tokenVerify(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json({
                status: true,
                msg: 'token validated',
                data: req.user
            });
        });
    }
    encryptPasword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            const cript = yield bcryptjs_1.default.genSalt(10);
            return bcryptjs_1.default.hash(password, cript);
        });
    }
    validatePassword(password, passwordSave) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bcryptjs_1.default.compare(password, passwordSave);
        });
    }
    verifyDNI(dni) {
        return __awaiter(this, void 0, void 0, function* () {
            const _dni = { dni: dni };
            const sql = `SELECT * FROM users WHERE ?`;
            const response = yield (yield database_1.default).query(sql, [_dni]);
            if (response.length > 0) {
                return true;
            }
            else {
                return false;
            }
        });
    }
}
const authController = new AuthController();
exports.default = authController;
