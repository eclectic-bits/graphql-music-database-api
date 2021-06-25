import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';

import { DatabaseContext } from './contexts';
import { AlbumResolver, ArtistResolver, TrackResolver } from './resolvers';
import { GenreResolver } from './resolvers/genreResolver';

export class Server {
    /**
     *  Start Server
     */
    public start = async (port: number|string) => {
        // initialize database connection
        await DatabaseContext.initializeDatabaseConnection();

        // ... build graphql schema
        const schema = await buildSchema({
            'resolvers': [ AlbumResolver, ArtistResolver, GenreResolver, TrackResolver ]
        });

        // Create the GraphQL server
        const server = new ApolloServer({
            schema,
            'playground': true
        });

        // Start the server
        const { url } = await server.listen(port);

        const message = 'Server is running, GraphQL ' +
                        `Playground available at ${ url }`;
        console.log(message);
    };
}