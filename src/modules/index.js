import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';
import { UserQuery, UserMutation } from './user';
import { TraineeQuery, TraineeMutation, TraineeSubscription } from './trainee';

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
      ...UserMutation,
    },
    Subscription: {
      ...TraineeSubscription,
    },
  },
  typeDefs,
};
