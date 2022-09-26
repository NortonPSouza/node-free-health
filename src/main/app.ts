import express, { Express } from 'express';
import morgan from "morgan";
import AppDatabase from '../../connections/database/appDataBase';
import {Routes}  from '../routes';

export class Application {

    private appDatabase = new AppDatabase();
    private app: Express;
    private routes = new Routes();
    private readonly PORT = 3000;

    constructor() {
        this.app = express();
        this.setup();
        this.database();
        this.server();
        this.route();
    }

    private setup(): void{
        morgan.format("logger-dev"," :remote-addr :method :url :status :response-time ms - [:date[web]] - :user-agent");

        this.app.use(morgan('logger-dev'));
    }

    private database(): void {
        this.appDatabase.initConnection();
    }

    private server(): void {
        this.app.listen(this.PORT, () => {
            console.log(`⚡️[server]: Server is running at https://localhost:${this.PORT}`);
        });
    }

    private route(): void {
        this.app.use('/api/v1', this.routes.getRouter());
    }
}
