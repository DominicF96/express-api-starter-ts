import User from '../models/user.model';

class UserService {
  async createUser(auth0Id: string, roleId: string) {
    return User.create({ auth0Id, roleId });
  }

  async getUserById(id: string) {
    return User.findByPk(id);
  }

  async getAllUsers() {
    return User.findAll();
  }

  async updateUser(id: string, updates: Partial<User>) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user.update(updates);
  }

  async deleteUser(id: string) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user.destroy();
  }
}

export default new UserService();
