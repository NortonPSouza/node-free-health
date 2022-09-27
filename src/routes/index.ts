import express, {Router} from 'express';
import { userController } from '../controller/user/indext';

export class Routes {
    private router = express.Router();

    constructor() {
        this.userRoutes();
    }

    public getRouter(): Router {
      return this.router;
    }

    private userRoutes(): void {
        this.router.post('/user', userController.register);
    }
}
