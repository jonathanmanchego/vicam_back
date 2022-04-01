import { Router } from 'express';
import authController from '../controllers/authController';
import { validarToken } from '../middlewares/validarToken';

class AuthRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/create', authController.create);
        this.router.post('/login', authController.login);
        this.router.post('/token-verify', validarToken, authController.tokenVerify);
        
    }
}

const authRoutes = new AuthRoutes();
export default authRoutes.router;
