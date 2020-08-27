/* eslint-disable no-invalid-this */
class User {
  constructor() {
    this.users = new Map();
    this.id = 0;
  }

  getAllUsers() {
    const mapTOArray = Array.from(this.users.values());
    return mapTOArray;
  }

  createUser = (user) => {
    this.id += 1;
    this.users.set(this.id, { ...user, id: this.id });
    return this.users.get(this.id);
  }

  updateUser = (id, email, role) => {
    const { user } = this.users.get(Number(id));
    this.users.set(Number(id), { ...user, email, role });
    return this.users.get(Number(id));
  }

  deleteUser = (id) => {
    this.users.delete(Number(id));
    return id;
  }

  getUser = (id) => this.users.get(Number(id))
}
export default new User();
