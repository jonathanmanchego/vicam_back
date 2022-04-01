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
const documentType_1 = __importDefault(require("../models/documentType"));
class DocumentTypeController {
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // const documentType = new DocumentType( "OFICIO", "DOCUMENTO HACIA OTRAS ENTIDADES");
                // const response = await documentType.save();
                // const response = req.body;
                const response = yield documentType_1.default.create(req.body);
                res.json({
                    status: true,
                    msg: 'registro guardado!',
                    data: response
                });
            }
            catch (error) {
                res.json(error);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // const documentType = new DocumentType("INFORM","DOCUMENTO PRINCIPAL");
                // const response = await documentType.update();
                const response = yield documentType_1.default.update(req.body.data, {
                    where: {
                        document_type_id: req.body.document_type_id
                    }
                });
                res.json({
                    status: true,
                    msg: 'Registro actualizado!!',
                    data: response
                });
            }
            catch (error) {
                res.json(error);
            }
        });
    }
    getCategorias(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = `SELECT * FROM documents_types`;
                const response = yield (yield database_1.default).query(sql);
                if (response.length > 0) {
                    res.json({
                        status: true,
                        msg: 'Lista de categorias',
                        data: response
                    });
                }
                else {
                    res.json({
                        status: false,
                        msg: 'No se encontraro categorias',
                        data: response
                    });
                }
            }
            catch (error) {
                res.json(error);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const saveData = req.body;
                const sql = `INSERT INTO categorias SET ?`;
                const response = yield (yield database_1.default).query(sql, [saveData]);
                res.json({
                    status: true,
                    msg: 'Categoría registrada',
                    data: response
                });
            }
            catch (error) {
                res.json(error);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const idcategoria = { idcategoria: req.body.idcategoria };
                const sql = `DELETE FROM categorias WHERE ?`;
                const response = yield (yield database_1.default).query(sql, [idcategoria]);
                res.json({
                    status: true,
                    msg: 'Categoría eliminada',
                    data: response
                });
            }
            catch (error) {
                res.json(error);
            }
        });
    }
}
const documentTypeController = new DocumentTypeController();
exports.default = documentTypeController;
