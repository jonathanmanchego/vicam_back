import { Router } from 'express';
import documentTypeController from '../controllers/documentTypeController';

class DocumentTypeRoutes {
    
    public router: Router = Router();
        
    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/getCategorias',documentTypeController.getCategorias);
        this.router.post('/create',documentTypeController.create);
        this.router.post('/update',documentTypeController.update);
        this.router.post('/delete',documentTypeController.delete);
        this.router.post('/save',documentTypeController.save);
    }
}

const documentTypeRoutes = new DocumentTypeRoutes();
export default documentTypeRoutes.router;
