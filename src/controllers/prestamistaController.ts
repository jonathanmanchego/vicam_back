import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const { Op } = require("sequelize");

import Prestamista from "../models/prestamista";
import User from "../models/user";
import Pais from "../models/pais";
import Departamento from "../models/departamento";
import Contrato from "../models/contrato";
import Solicitud from "../models/solicitud";
import Tarjeta from "../models/tarjeta";
import CuentaAhorro from "../models/cuentaAhorro";

class PrestamistaController { 
    public async encryptPasword(password: string): Promise<string> {
        const cript = await bcrypt.genSalt(10);
        return bcrypt.hash(password, cript);
    }
    /**
     * 
     * @param req 
     * @param res 
     */
    public async getOne(req: Request, res: Response) {
        try {
            // const prestamista_id = { prestamista_id: req.body.prestamista_id };
            const id = req.params.id;
            const dbResponse = await Prestamista.findByPk(id);
            const dataResponse = {
                status: true,
                msg: 'Datos del prestamista'+id,
                data: dbResponse
            };
            res.json(dataResponse);
        } catch (error) {
            const dataErrorResponse = {
                status: false,
                msg: 'Ocurrio un error!!',
                dataError: error
            };
            res.json(dataErrorResponse);
        }
    }
    /**
     * 
     * @param req 
     * @param res 
     */
    public async getAll(req: Request, res: Response) {
        try {
            const dbResponse = await Prestamista.findAll({
                include: [{
                    model: Pais,
                    as:'pais'
                }, {
                    model: Departamento,
                    as:'departamento'
                }, {
                    model: Contrato,
                    as: 'contrato',
                    where: {
                        estado_contrato_id: {
                            [Op.ne]: 6 ///DIFERENTE A FINALIZADO
                        } 
                    }
                }, {
                    model: Tarjeta,
                    as: 'tarjeta'
                }, {
                    model: CuentaAhorro,
                    as:'cuenta_ahorro'
                }
                ]
            });
            const dataResponse = {
                status: true,
                msg: 'Lista de prestamistas!asas',
                data: dbResponse
            };
            res.json(dataResponse);
        } catch (error) {
            const dataErrorResponse = {
                status: false,
                msg: '',
                dataError: error
            };
            res.json(dataErrorResponse);
        }        
    }
    /**
     * Funcion save => Guardar datos en la BD
     * @param req Parametros enviados desde el frontend
     * @param res Datos a enviar al frontend
     */
    public async save(req: Request, res: Response) {
        try {
            const dataSave = req.body;
            console.log(dataSave);
            dataSave.user_password = await prestamistaController.encryptPasword(dataSave.user_password);
            const dbResponse = await User.create(dataSave, { include: "prestamista" }); 
            const dataResponse = {
                status: true,
                msg: 'Registro guardado',
                data: dbResponse
            };
            res.json(dataResponse);
        } catch (error) {
            const dataErrorResponse = {
                status: false,
                msg: 'Ocurrio un error!!',
                dataError: error
            };
            res.json(dataErrorResponse);
        }        
    }
    /**
     * funcion update => Actualizar datos del prestamista en la BD
     * @param req 
     * @param res 
     */
    public async update(req: Request, res: Response) {
        try {
            const id = { id: req.params.id };
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
            const dbResponse = await Prestamista.update(dataUpdate, { where: id });
            const dataResponse = {
                status: true,
                msg: 'Registro actualizado!',
                data: dbResponse
            };
            res.json(dataResponse);
        } catch (error) {
            const dataErrorResponse = {
                status: false,
                msg: 'Ocurrio un error!!',
                dataError: error
            };
            res.json(dataErrorResponse);
        }        
    }
    /**
     * 
     * @param req 
     * @param res 
     */
    public async delete(req: Request, res: Response) {
        try {
            const id = { id: req.params.id };
            const dbResponse = await Prestamista.destroy({ where: { id } });
            const dataResponse = {
                status: true,
                msg: 'Registro eliminado!',
                data: dbResponse
            };
            res.json(dataResponse);
        } catch (error) {
            const dataErrorResponse = {
                status: false,
                msg: 'Ocurrio un error!!',
                dataError: error
            };
            res.json(dataErrorResponse);
        }    
    }
}

const prestamistaController = new PrestamistaController();
export default prestamistaController;