// 'reflect-metadata' is needed for type-graphql, and typeorm
// this needs to be run first
import 'reflect-metadata';

import { Server } from './server';

const PORT = process.env.PORT || 4000;
const server = new Server();

server
    .start(PORT)
    .catch(console.error);