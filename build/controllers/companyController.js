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
const company_1 = __importDefault(require("../models/company"));
class CompanyController {
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dataSave = {
                    company_name: req.body.company_name,
                    company_address: req.body.company_address,
                    company_telf1: req.body.company_telf1,
                    company_telf2: req.body.company_telf2,
                    company_telf3: req.body.company_telf3
                };
                const response = yield company_1.default.create(dataSave);
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
                const dataUpdate = {
                    company_name: req.body.company_name,
                    company_address: req.body.company_address,
                    company_telf1: req.body.company_telf1,
                    company_telf2: req.body.company_telf2,
                    company_telf3: req.body.company_telf3
                };
                const id = { company_id: req.body.company_id };
                const response = yield company_1.default.update(dataUpdate, { where: id }
                // {
                //     where: {
                //         company_id: req.body.company_id
                //     }
                // }
                );
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
}
const companyController = new CompanyController();
exports.default = companyController;
