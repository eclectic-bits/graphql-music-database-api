// 'reflect-metadata' is needed for type-graphql,
// and typeorm this needs to be run first
import 'reflect-metadata';

import { server } from './server';
import { DatabaseContext, GraphqlHttpContext } from './contexts';

// get server port variable
const PORT = process.env.PORT || 4000;

const main = async () => {
    // initialize database connection
    await DatabaseContext.initializeDatabaseConnection();

    // generate graphQl http configuration
    const graphQlHttpConfiguration = await GraphqlHttpContext.generateHttpConfiguration();

    // start server and listen on port
    const app = await server(graphQlHttpConfiguration);
    app.listen(PORT, () => {
        console.log( `server started at http://localhost:${ PORT }` );
    });
};

main()
    .catch(error => {
        // catch all of the errors
        console.error(error);
    });