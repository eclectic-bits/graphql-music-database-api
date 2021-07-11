import express from 'express';

import { Middleware } from './types';

const server = async (graphQlHttpConfiguration: Middleware): Promise<express.Express> => {
    // Create the GraphQL server using express
    const app: express.Express = express();
    app.use('/', graphQlHttpConfiguration);

    return app;
};

export { server };