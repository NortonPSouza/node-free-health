import morgan from "morgan";
import express, {Express, NextFunction, Request, Response} from 'express';
//
import { Routes }  from '../routes';
import Database from '../../connections/database';
import { DataSource } from "typeorm";

export interface NewRequest extends Request {
    dataSource: DataSource
}
export class Application {

	private app: Express;
	private routes = new Routes();
	private database = new Database();
    private readonly PORT = 3000;

    constructor() {
        this.app = express();
        this.setupDatabase();
        this.setupConfig();
		this.setupRoutes();
		this.server();
    }

    private useDatabase(req: NewRequest, res: Response, next: NextFunction){
        req.dataSource = this.database.connection;
        next();
    }

    private setupConfig(): void {
		this.app.use(express.json());
		this.app.use(express.urlencoded());
        this.app.use(morgan('dev'));
        this.app.use(this.useDatabase.bind(this));
    }

    private setupDatabase(): void {
        this.database.initConnection()
			.then(() => {
				console.log("⚡️[database]: has been initialized!");
			});
    }

	private setupRoutes(): void {
    	this.app.get('/', (req: Request, res: Response) => res.status(204).send());
    	this.app.get('/health', (req: Request, res: Response) => res.status(204).send());
		this.app.use('/api/v1', this.routes.getRouter());
	}

    private server(): void {
        this.app.listen(this.PORT, () => {
            console.log(`⚡️[server]: is running at http://localhost:${this.PORT}`);
        });
    }

}
