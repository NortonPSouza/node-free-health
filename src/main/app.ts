import express, { Express } from 'express';
import AppDataBase from '../../connections/database/appDataBase';

export class Application {

    private app: Express;
    private readonly PORT = 3000;

    constructor() {
        this.app = express();
        this.server();
        this.connectionDB();
    }

    private server(): void {
        this.app.listen(this.PORT, () => {
            console.log(`⚡️[server]: Server is running at https://localhost:${this.PORT}`);
        });
    }

    private connectionDB(): void{
        new AppDataBase().initConnection();
    }
}
