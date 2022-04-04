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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prestamista_1 = __importDefault(require("../models/prestamista"));
const user_1 = __importDefault(require("../models/user"));
class PrestamistaController {
    encryptPasword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            const cript = yield bcryptjs_1.default.genSalt(10);
            return bcryptjs_1.default.hash(password, cript);
        });
    }
    /**
     *
     * @param req
     * @param res
     */
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // const prestamista_id = { prestamista_id: req.body.prestamista_id };
                const prestamista_id = req.body.prestamista_id;
                const dbResponse = prestamista_1.default.findByPk(prestamista_id);
                const dataResponse = {
                    status: true,
                    msg: 'Datos del prestamista',
                    data: dbResponse
                };
                res.json(dataResponse);
            }
            catch (error) {
                const dataErrorResponse = {
                    status: false,
                    msg: 'Ocurrio un error!!',
                    dataError: error
                };
                res.json(dataErrorResponse);
            }
        });
    }
    /**
     *
     * @param req
     * @param res
     */
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dbResponse = prestamista_1.default.findAll();
                const dataResponse = {
                    status: true,
                    msg: 'Lista de prestamistas!',
                    data: dbResponse
                };
                res.json(dataResponse);
            }
            catch (error) {
                const dataErrorResponse = {
                    status: false,
                    msg: '',
                    dataError: error
                };
                res.json(dataErrorResponse);
            }
        });
    }
    /**
     * Funcion save => Guardar datos en la BD
     * @param req Parametros enviados desde el frontend
     * @param res Datos a enviar al frontend
     */
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dataSave = req.body;
                // dataSave.user.user_password = await prestamistaController.encryptPasword(dataSave.prestamista_password);
                // dataSave.prestamista.prestamista_password = await prestamistaController.encryptPasword(dataSave.prestamista_password);
                // console.log(dataSave    );
                const dbResponse = yield user_1.default.create(dataSave, { include: "prestamista" });
                // const rrr = dbResponse.getDataValue("prestamista_id");
                const dataResponse = {
                    status: true,
                    msg: 'Registro guardado',
                    data: //{
                    dbResponse
                    // prestamista_id: dbResponse.getDataValue("prestamista_id"),
                    // prestamista_codigo: dbResponse.getDataValue("prestamista_codigo"),
                    // prestamista_nombres: dbResponse.getDataValue("prestamista_nombres"),
                    // prestamista_apellidos: dbResponse.getDataValue("prestamista_apellidos"),
                    // prestamista_dni: dbResponse.getDataValue("prestamista_dni"),
                    // prestamista_celular1: dbResponse.getDataValue("prestamista_celular1"),
                    // prestamista_celular2: dbResponse.getDataValue("prestamista_celular2"),
                    // prestamista_telefono: dbResponse.getDataValue("prestamista_telefono"),
                    // prestamista_correo: dbResponse.getDataValue("prestamista_correo"),
                    // // prestamista_password: dbResponse.getDataValue("prestamista_password"),
                    // prestamista_direccion: dbResponse.getDataValue("prestamista_direccion"), 
                    // user:
                    //}
                };
                res.json(dataResponse);
            }
            catch (error) {
                const dataErrorResponse = {
                    status: false,
                    msg: 'Ocurrio un error!!',
                    dataError: error
                };
                res.json(dataErrorResponse);
            }
        });
    }
    /**
     * funcion update => Actualizar datos del prestamista en la BD
     * @param req
     * @param res
     */
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = { prestamista_id: req.body.prestamista_id };
                const dataUpdate = {
                    prestamista_codigo: req.body.prestamista_codigo,
                    prestamista_nombres: req.body.prestamista_nombres,
                    prestamista_apellidos: req.body.prestamista_apellidos,
                    prestamista_dni: req.body.prestamista_dni,
                    prestamista_celular1: req.body.prestamista_celular1,
                    prestamista_celular2: req.body.prestamista_celular2,
                    prestamista_telefono: req.body.prestamista_telefono,
                    prestamista_correo: req.body.prestamista_correo,
                    // prestamista_password: req.body.prestamista_password,
                    prestamista_direccion: req.body.prestamista_direccion
                };
                const dbResponse = yield prestamista_1.default.update(dataUpdate, { where: id });
                const dataResponse = {
                    status: true,
                    msg: 'Registro actualizado!',
                    data: dbResponse
                };
                res.json(dataResponse);
            }
            catch (error) {
                const dataErrorResponse = {
                    status: false,
                    msg: 'Ocurrio un error!!',
                    dataError: error
                };
                res.json(dataErrorResponse);
            }
        });
    }
    /**
     *
     * @param req
     * @param res
     */
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = { prestamista_id: req.body.prestamista_id };
                const dbResponse = yield prestamista_1.default.destroy({ where: { id } });
                const dataResponse = {
                    status: true,
                    msg: 'Registro eliminado!',
                    data: dbResponse
                };
                res.json(dataResponse);
            }
            catch (error) {
                const dataErrorResponse = {
                    status: false,
                    msg: 'Ocurrio un error!!',
                    dataError: error
                };
                res.json(dataErrorResponse);
            }
        });
    }
}
const prestamistaController = new PrestamistaController();
exports.default = prestamistaController;
