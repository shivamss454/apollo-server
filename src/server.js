/* eslint-disable no-invalid-this */
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import bodyParser from 'body-parser';
// import graphqlHTTP from 'express-graphql';

export default class Server {
  constructor(config) {
    this.app = express();
    this.config = config;
  }

    bootstrap = () => {
      this.initBodyParser();
      this.setUpRoutes();
      return this;
    };

    run = () => {
      const { app, config: { port, env } } = this;
      app.listen(port, (err) => {
        if (err) throw err;
        console.log('app is running successfully on ', { port }, { env });
      });
      return this;
    };

    initBodyParser = () => {
      const { app } = this;
      app.use(bodyParser.urlencoded({ extended: false }));
      app.use(bodyParser.json());
    };

    setUpRoutes = () => {
      const { app } = this;
      app.get('/healthcheck', (req, res) => {
        console.log('inside health check');
        res.send('I am ok');
        app.get('/graphql');
      });
    };

     setUpApolloServer = async (schema) => {
       const { app } = this;

       this.Server = new ApolloServer({ ...schema });
       this.Server.applyMiddleware({ app });
     };
}
