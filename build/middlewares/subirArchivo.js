"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subirImagen = exports.storage = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
exports.storage = multer_1.default.diskStorage({
    destination: path_1.default.join(__dirname, '../public/uploads'),
    filename: (req, file, cb) => {
        const nameFile = file.originalname.split('.')[0];
        cb(null, nameFile + '-' + Date.now() + path_1.default.extname(file.originalname));
    }
});
exports.subirImagen = (0, multer_1.default)({
    storage: exports.storage
}).single('archivo');
