import express, { Router } from 'express';
import { AuthController } from '../controller/auth';
import { UserController } from '../controller/user';

export class Routes {
    private router = express.Router();

    constructor() {
        this.auth();
        this.userRoutes();
    }

    public getRouter(): Router {
        return this.router;
    }

    private auth(): void{
        this.router.post('/auth', AuthController.auth);
    }

    private userRoutes(): void {
        this.router
            .post('/user', UserController.register)
            .get('/user', UserController.allUsers)
            .get('/user/:id', UserController.user)
            .delete('/user/:id', UserController.delete)
            .put('/user/:id', UserController.update)
    }
}
