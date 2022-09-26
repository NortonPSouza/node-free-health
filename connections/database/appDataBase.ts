import "reflect-metadata";
import { DataSource } from 'typeorm';

export default class AppDatabase {

    private connection: DataSource

    constructor() {
        this.connection = new DataSource({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "dev-norton",
            password: "admin",
            database: "free-health",
            synchronize: true,
            logging: false,
            entities: ['../../src/entity/*.ts'],
            migrations: ['../../src/migrations/*.ts'],
            // subscribers: [],
        });
    }

    public initConnection(): void {
        this.connection.initialize()
            .then(() => {
                console.log("Database has been initialized!")
            })
            .catch((err) => {
                console.error("Error during Data Source initialization", err)
            })
    }
}