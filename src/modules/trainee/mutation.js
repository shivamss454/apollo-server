/* eslint-disable no-unused-vars */
import { UserInputError } from 'apollo-server';
import pubsub from '../pubsub';
import constant from '../../lib/constant';

export default {
  createTrainee: async (parent, args, context) => {
    try {
      const {
        payload: {
          name, email, password,
        },
      } = args;
      const { dataSources: { traineeAPI } } = context;
      const res = await traineeAPI.createTrainee({
        name, email, password,
      });
      pubsub.publish(constant.subscriptions.TRAINEE_CREATED, { traineeCreated: res.data });
      return res.data;
    } catch (error) {
      return new UserInputError('invalid arguments', {
        invalidArgs: Object.keys(args),
      });
    }
  },

  updateTrainee: async (parent, args, context) => {
    try {
      const {
        payload: {
          name, email, id,
        },
      } = args;
      const { dataSources: { traineeAPI } } = context;
      const res = await traineeAPI.updateTrainee({
        name, email, id,
      });
      pubsub.publish(constant.subscriptions.TRAINEE_UPDATED, { traineeupdated: res.data.id });
      return res.data.id;
    } catch (error) {
      return new UserInputError('invalid arguments', {
        invalidArgs: Object.keys(args),
      });
    }
  },
  deleteTrainee: async (parent, args, context) => {
    try {
      const { id } = args;
      const { dataSources: { traineeAPI } } = context;
      const res = await traineeAPI.deleteTrainee(id);
      pubsub.publish(constant.subscriptions.TRAINEE_DELETED, { traineeDeleted: res.data.id });
      return res.data.id;
    } catch (error) {
      return new UserInputError('invalid arguments', {
        invalidArgs: Object.keys(args),
      });
    }
  },
};
