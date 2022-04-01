"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Request, Response } from 'express';
const sequelize_1 = require("sequelize");
const mysql_1 = __importDefault(require("../database/mysql"));
class DocumentType extends sequelize_1.Model {
}
DocumentType.init({
    document_type_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    document_type_name: sequelize_1.DataTypes.STRING,
    document_type_description: sequelize_1.DataTypes.STRING
}, {
    sequelize: mysql_1.default,
    modelName: 'documents_types'
});
exports.default = DocumentType;
// export default class DocumentType {
//     private document_type_id: number;
//     private document_type_name: string;
//     private document_type_description: string;
//     constructor(document_type_id: number, document_type_name: string, document_type_description: string) {
//         this.document_type_id = document_type_id;
//         this.document_type_name = document_type_name;
//         this.document_type_description = document_type_description;
//     }
//     public async save() {
//         try {
//             const sql = `INSERT INTO documents_types SET ?`;
//             const data = this.documentTypeJson();
//             const response = await (await db).query(sql, [data]);
//             console.log(response);
//             return response;
//         } catch (error) {
//             return error;
//         }
//     }
//     public async update() {
//         try {
//             const document_type_id = { document_type_id: this.document_type_id };
//             const data = this.documentTypeJson();
//             const sql = `UPDATE documents_types SET ? WHERE ?`;
//             const response = await (await db).query(sql,[data,document_type_id]);
//             return response;
//         } catch (error) {
//             return error;
//         }
//     }
//     private documentTypeJson() {
//         return {
//             // document_type_id: this.document_type_id,
//             document_type_name: this.document_type_name,
//             document_type_description: this.document_type_description
//         };
//     }
// }
