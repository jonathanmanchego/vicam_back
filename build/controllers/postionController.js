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
const position_1 = __importDefault(require("../models/position"));
const company_1 = __importDefault(require("../models/company"));
class PositionController {
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dataSave = {
                    company_id: req.body.company_id,
                    position_name: req.body.position_name,
                    position_description: req.body.position_description,
                    state_db: 1,
                };
                const response = yield position_1.default.create(dataSave);
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
    getPositions(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield position_1.default.findAll({
                    include: {
                        model: company_1.default
                    }
                });
                res.json({
                    status: true,
                    msg: 'Lista de Positions',
                    data: response
                });
            }
            catch (error) {
                res.json(error);
            }
        });
    }
}
const positionController = new PositionController();
exports.default = positionController;
