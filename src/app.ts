import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { ConnectionOptions, createConnection } from 'typeorm';

import { ArtistResolver } from './resolvers';
import * as entities from './entities';

// // eslint-disable-next-line max-statements
// async function main () {
//     const options: ConnectionOptions = {
//         type: 'sqlite',
//         database: 'data/chinook.sqlite',
//         entities: Object.values(entities),
//         logging: true
//     };
//     const connection = await createConnection(options);

//     const artistId = 1;

//     // artists
//     const artistRepository = new ArtistRepository();
//     const artist = await artistRepository.getArtist(artistId);
//     console.log(artist);

//     connection.close();
// }

// main().catch(console.error);


const PORT = process.env.PORT || 4000;

async function bootstrap() {
    const options: ConnectionOptions = {
        type: 'sqlite',
        database: 'data/chinook.sqlite',
        entities: Object.values(entities),
        logging: true
    };
    await createConnection(options);

    // ... Building schema here
    const schema = await buildSchema({
        resolvers: [ ArtistResolver ]
    });

    // Create the GraphQL server
    const server = new ApolloServer({
        schema,
        playground: true
    });

    // Start the server
    const { url } = await server.listen(PORT);
    console.log(`Server is running, GraphQL Playground available at ${ url }`);
}

bootstrap();