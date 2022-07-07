import 'reflect-metadata';
import express, { Express } from 'express';

export class Application {

    private app: Express;
    private readonly PORT = 3000;

    constructor() {
        this.app = express();
        this.server();
    }

    private server(): void {
        this.app.listen(this.PORT, () => {
            console.log(`⚡️[server]: Server is running at https://localhost:${this.PORT}`);
        });
    }

}
