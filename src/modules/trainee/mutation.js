/* eslint-disable no-unused-vars */
import userInstance from '../../service/user';
import pubsub from '../pubsub';
import constant from '../../lib/constant';

export default {
  createTrainee: (parent, args, context) => {
    const { user } = args;
    const createduser = userInstance.createUser(user);
    pubsub.publish(constant.subscriptions.TRAINEE_CREATED, { traineeCreated: createduser });
    return createduser;
  },
  updateTrainee: (parent, args, context) => {
    const { id, email, role } = args;
    const updateduser = userInstance.updateUser(id, email, role);
    pubsub.publish(constant.subscriptions.TRAINEE_UPDATED, { traineeUpdated: updateduser });
    return updateduser;
  },
  deleteTrainee: (parent, args, context) => {
    const { id } = args;
    const deleteduser = userInstance.deleteUser(id);
    pubsub.publish(constant.subscriptions.TRAINEE_DELETED, { traineeDeleted: deleteduser });
    return deleteduser;
  },
};
