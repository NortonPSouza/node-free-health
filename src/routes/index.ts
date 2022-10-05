import express, { Router } from 'express';
import { UserController } from '../controller/user';

export class Routes {
    private router = express.Router();

    constructor() {
        this.userRoutes();
    }

    public getRouter(): Router {
        return this.router;
    }

    private userRoutes(): void {
        this.router
            .post('/user', UserController.register)
            .get('/user', UserController.allUsers)
            .get('/user/:id', UserController.user)
            .delete('/user/:id', UserController.deleteUser)
    }
}
