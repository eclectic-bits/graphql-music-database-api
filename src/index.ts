import 'reflect-metadata';

import { Server } from './server';

const PORT = process.env.PORT || 4000;
new Server().start(PORT);