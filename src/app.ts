import { GraphQLServer } from 'graphql-yoga';

import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

// type definitions
const typeDefs = `
    type Query {
        genres: [Genre!]!
        mediaTypes: [MediaType!]!
    }

    type Genre {
        id: ID!
        name: String!
    }

    type MediaType {
        id: ID!
        name: String!
    }
`;

// resolvers
const resolvers = { Query: {
    genres() {
        return client.genre.findMany();
    },
    mediaTypes() {
        return client.mediaType.findMany();
    }
} };

const server = new GraphQLServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});

server.start(() => {
    console.log('The server is running on http://localhost:4000');
});