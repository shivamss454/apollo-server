import Server from './server';
import configuration from './config/configuration';
import Schema from './modules';

const server = new Server(configuration);
server.bootstrap();
server.setUpApolloServer(Schema);
