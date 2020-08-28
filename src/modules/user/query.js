/* eslint-disable no-invalid-this */
/* eslint-disable no-unused-vars */
import { UserInputError } from 'apollo-server';

export default {
  getMe: async (parent, args, context) => {
    try {
      const { dataSources: { userAPI } } = context;
      const res = await userAPI.getMe();
      return res.data;
    } catch (error) {
      return new UserInputError('invalid Arguments', {
        invalidArgs: Object.keys(args),
      });
    }
  },
};
