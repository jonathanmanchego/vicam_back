import { Router } from 'express';
import uploadController from '../controllers/uploadController';
import { subirImagen } from '../middlewares/subirArchivo';

class UploadRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.post('/save', subirImagen, uploadController.save);
    }

}

const uploadRoutes = new UploadRoutes();
export default uploadRoutes.router;