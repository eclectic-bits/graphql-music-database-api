import { ConnectionOptions, createConnection } from 'typeorm';

import * as entities from '../entities';

export class DatabaseContext {
    public static initializeDatabaseConnection = async () => {
        const options: ConnectionOptions = {
            type: 'sqlite',
            database: 'data/chinook.sqlite',
            entities: Object.values(entities),
            logging: true
        };
        await createConnection(options);
    }
}