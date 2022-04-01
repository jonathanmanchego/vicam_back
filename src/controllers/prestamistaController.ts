import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Prestamista from "../models/prestamista";

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
            const prestamista_id = req.body.prestamista_id;
            const dbResponse = Prestamista.findByPk(prestamista_id);
            const dataResponse = {
                status: true,
                msg: 'Datos del prestamista',
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
            const dbResponse = Prestamista.findAll();
            const dataResponse = {
                status: true,
                msg: 'Lista de prestamistas!',
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
            const dataSave = {
                prestamista_codigo: req.body.prestamista_codigo,
                prestamista_nombres: req.body.prestamista_nombres,
                prestamista_apellidos: req.body.prestamista_apellidos,
                prestamista_dni: req.body.prestamista_dni,
                prestamista_celular1: req.body.prestamista_celular1,
                prestamista_celular2: req.body.prestamista_celular2,
                prestamista_telefono: req.body.prestamista_telefono,
                prestamista_correo: req.body.prestamista_correo,
                prestamista_password: req.body.prestamista_password,
                prestamista_direccion: req.body.prestamista_direccion
            };
            dataSave.prestamista_password = await prestamistaController.encryptPasword(dataSave.prestamista_password);

            const dbResponse = await Prestamista.create(dataSave); 
            const rrr = dbResponse.getDataValue("prestamista_id");
            const dataResponse = {
                status: true,
                msg: 'Registro guardado',
                data: {
                    prestamista_id: dbResponse.getDataValue("prestamista_id"),
                    prestamista_codigo: dbResponse.getDataValue("prestamista_codigo"),
                    prestamista_nombres: dbResponse.getDataValue("prestamista_nombres"),
                    prestamista_apellidos: dbResponse.getDataValue("prestamista_apellidos"),
                    prestamista_dni: dbResponse.getDataValue("prestamista_dni"),
                    prestamista_celular1: dbResponse.getDataValue("prestamista_celular1"),
                    prestamista_celular2: dbResponse.getDataValue("prestamista_celular2"),
                    prestamista_telefono: dbResponse.getDataValue("prestamista_telefono"),
                    prestamista_correo: dbResponse.getDataValue("prestamista_correo"),
                    // prestamista_password: dbResponse.getDataValue("prestamista_password"),
                    prestamista_direccion: dbResponse.getDataValue("prestamista_direccion")
                }
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
            const id = { prestamista_id: req.body.prestamista_id };
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
            const id = { prestamista_id: req.body.prestamista_id };
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