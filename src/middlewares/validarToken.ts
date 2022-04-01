import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
///hohoho

export const validarToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('auth-jwt');
    if (!token) {
        res.json({
            status: false,
            msg: 'Acceso denegado',
            data: []
        });
    } else {
        jwt.verify(token, 'token-jwt', (error,dataToken) => {
            if (error) {
                // res.status(403).json({
                res.json({
                    status: false,
                    msg: 'Acceso denegado'
                });
            } else {
                req.user = dataToken!.user;
                next();
            }
        });
    }  
}