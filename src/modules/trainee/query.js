/* eslint-disable no-unused-vars */
import userInstance from '../../service/user';

export default {
  getAllTrainees: () => userInstance.getAllUsers(),
  getTrainee: (parent, args, context) => {
    const { id } = args;
    return userInstance.getUser(id);
  },

};
