import pubsub from '../pubsub';
import constant from '../../lib/constant';

export default {
  traineeCreated: {
    subscribe: () => pubsub.asyncIterator([constant.subscriptions.TRAINEE_CREATED]),
  },
  traineeUpdated: {
    subscribe: () => pubsub.asyncIterator([constant.subscriptions.TRAINEE_UPDATED]),
  },
  traineeDeleted: {
    subscribe: () => pubsub.asyncIterator([constant.subscriptions.TRAINEE_DELETED]),
  },
};
