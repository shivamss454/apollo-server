/* eslint-disable no-invalid-this */
import { UserInputError } from 'apollo-server';

export default {
  getTrainee: async (parent, args, context) => {
    try {
      const { data: { skip, limit } } = args;
      const { dataSources: { traineeAPI } } = context;
      const res = await traineeAPI.getTrainee({ skip, limit });
      return res.data;
    } catch (error) {
      return new UserInputError('invalid Arguments', {
        invalidArgs: Object.keys(args),
      });
    }
  },

};
