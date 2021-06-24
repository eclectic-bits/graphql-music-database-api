import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { Container } from 'inversify';
import {
    Connection,
    ConnectionOptions,
    createConnection,
    getConnection
} from 'typeorm';

import * as entities from './entities';
import { AlbumResolver, ArtistResolver } from './resolvers';

export class Server {
    constructor() {
        this.registerDependencies();
    }

    /**
     *  Register Dependencies with IOC Container
     */
    private registerDependencies = async () => {
        const options: ConnectionOptions = {
            type: 'sqlite',
            database: 'data/chinook.sqlite',
            entities: Object.values(entities),
            logging: true
        };
        await createConnection(options);

        // register database connection
        // Container.set(Connection, getConnection());
    }

    /**
     *  Start Server
     */
    public start = async (port: number|string) => {
        // ... build graphql schema
        const schema = await buildSchema({
            resolvers: [ AlbumResolver, ArtistResolver ],
            container: Container
        });

        // Create the GraphQL server
        const server = new ApolloServer({
            schema,
            playground: true,
            tracing: true
        });

        // Start the server
        const { url } = await server.listen(port);

        const message = 'Server is running, GraphQL ' +
                        `Playground available at ${ url }`;
        console.log(message);
    }
}