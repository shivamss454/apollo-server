/* eslint-disable no-invalid-this */
import { RESTDataSource } from 'apollo-datasource-rest';
import config from '../config/configuration';

export default class TraineeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${config.serviceUrl}/api/trainee`;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

createTrainee = async (payload) => this.post('/', payload);

updateTrainee = async (payload) => this.put('/', payload);

deleteTrainee = async (id) => this.delete(`/${id}`);

getTrainee = async (data) => {
  const res = await this.get('/', data);
  return res;
}
}
