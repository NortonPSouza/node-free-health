import express, { Express } from 'express';
import AppDataBase from '../../connections/database/appDataBase';

export class Application {

    private dataBase = new AppDataBase();
    private app: Express;
    private readonly PORT = 3000;

    constructor() {
        this.app = express();
        this.connectionDB();
        this.server();
    }
    
    private connectionDB(): void {
        this.dataBase.initConnection();
    }

    private server(): void {
        this.app.listen(this.PORT, () => {
            console.log(`⚡️[server]: Server is running at https://localhost:${this.PORT}`);
        });
    }

    private routes(): void {
        // const { router } = this.routes
        // this.app.use('/api/v1', router)
    }
}
