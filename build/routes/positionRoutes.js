"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postionController_1 = __importDefault(require("../controllers/postionController"));
class PositionRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/save', postionController_1.default.save);
        this.router.post('/getPostions', postionController_1.default.getPositions);
    }
}
const positionRoutes = new PositionRoutes();
exports.default = positionRoutes.router;
