import { Request, Response } from 'express';
import db from '../database';

import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

class AuthController {

    public async create(req: Request, res: Response) {
        try {
            const data = req.body;
            console.log(req.body);
            console.log(data);

            if (! await authController.verifyDNI(data.dni)) {
                data.password = await authController.encryptPasword(data.password);
                const sql = `INSERT INTO users SET ?`;
                const response = await (await db).query(sql, data);
                res.json({
                    status: true,
                    msg: 'El usuario se registro correctamente',
                    data: response
                });
            } else {
                res.json({
                    status: false,
                    msg: 'Su email se encuentra ya registrado!',
                    data: []
                });
            }
        } catch (error) {
            res.json(error);
        }
    }

    public async login(req: Request, res: Response) {
        const dni = req.body.dni;
        const password = req.body.password;
        const sql = `SELECT * FROM users WHERE dni=?`;
        const response = await (await db).query(sql, [dni]);
        if (response.length > 0) {
            const passOk = await authController.validatePassword(password, response[0].password);
            if (passOk) {
                const user = response[0];
                user.password = '';
                const token = jwt.sign({ user }, 'token-jwt', { expiresIn: 60 * 10 });
                user.token = token;
                res.header('auth-jwt', token).json({
                    status: true,
                    msg: 'Acceso Ok!',
                    data: user
                });
            } else {
                res.json({
                    status: false,
                    msg: 'Contraseña incorrecta, acceso denegado!',
                    data: []
                });
            }
        } else {
            res.json({
                status: false,
                msg: 'Usuario incorrecto, acceso denegado!!',
                data: []
            });
        }
    }

    public async tokenVerify(req: Request, res: Response) {
        res.json({
            status: true,
            msg: 'token validated',
            data: req.user
        })
    }

    public async encryptPasword(password: string): Promise<string> {
        const cript = await bcrypt.genSalt(10);
        return bcrypt.hash(password, cript);
    }

    public async validatePassword(password: string, passwordSave: string): Promise<boolean> {
        return await bcrypt.compare(password, passwordSave);
    }

    public async verifyDNI(dni: string): Promise<boolean> {
        const _dni = { dni: dni };
        const sql = `SELECT * FROM users WHERE ?`;
        const response = await (await db).query(sql, [_dni]);
        if (response.length > 0) {
            return true;
        } else {
            return false;
        }
    }

}

const authController = new AuthController();
export default authController;