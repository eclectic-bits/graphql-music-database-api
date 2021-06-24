import 'reflect-metadata';

import { Server } from './server';

const PORT = process.env.PORT || 4000;
const server = new Server();

server
    .start(PORT)
    .catch(console.error);