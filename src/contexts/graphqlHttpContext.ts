import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'type-graphql';

import {
    AlbumResolver,
    ArtistResolver,
    GenreResolver,
    MediaTypeResolver,
    PlaylistResolver,
    TrackResolver
} from '../resolvers';

import { Middleware } from '../types';

export class GraphqlHttpContext {
    public static generateHttpConfiguration = async (): Promise<Middleware> => {
        const schema = await buildSchema({
            'resolvers': [
                AlbumResolver,
                ArtistResolver,
                GenreResolver,
                MediaTypeResolver,
                PlaylistResolver,
                TrackResolver
            ]
        });

        return graphqlHTTP({
            'schema': schema,
            'graphiql': true
        });
    };
}