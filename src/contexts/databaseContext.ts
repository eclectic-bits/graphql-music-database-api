import { ConnectionOptions, createConnection } from 'typeorm';

import * as entities from '../entities';

interface DatabaseContextConfiguration {
    debug: boolean;
}

export class DatabaseContext {
    public static initializeDatabaseConnection = async (config: DatabaseContextConfiguration) => {
        const options: ConnectionOptions = {
            'type': 'sqlite',
            'database': 'data/chinook.sqlite',
            'entities': Object.values(entities),
            'logging': config.debug
        };
        await createConnection(options);
    };
}