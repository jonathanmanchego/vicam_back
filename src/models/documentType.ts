// import { Request, Response } from 'express';
import { Model, DataTypes } from 'sequelize';
import db from '../database';

import sequelize from '../database/mysql';


class DocumentType extends Model{ }

DocumentType.init({
    document_type_id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    document_type_name: DataTypes.STRING,
    document_type_description: DataTypes.STRING
}, {
    sequelize,
    modelName:'documents_types'
});

export default DocumentType;

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


