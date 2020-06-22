export default {
  loginUser: async (parent, args, context) => {
    const { payload: { email, password } } = args;
    const { dataSources: { userAPI } } = context;
    const res = await userAPI.loginUser({ email, password });
    return res.data;
  },
};
