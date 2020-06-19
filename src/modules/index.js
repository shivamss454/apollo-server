import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';
import UserQuery from './user';
import { TraineeQuery, TraineeMutation } from './trainee';

const typesArray = fileLoader(path.join(__dirname, './**/*.graphql'));

const typeDefs = mergeTypes(typesArray, { all: true });
export default {
  resolvers: {
    Query: {
      ...UserQuery,
      ...TraineeQuery,
    },
    Mutation: {
      ...TraineeMutation,
    },
  },
  typeDefs,
};
