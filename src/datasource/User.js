/* eslint-disable no-invalid-this */
import { RESTDataSource } from 'apollo-datasource-rest';
import config from '../config/configuration';

export default class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${config.serviceUrl}/api/user`;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

  getMe = () => this.get('/me')

  loginUser = (payload) => this.post('/login', payload)
}
