import { Service } from 'egg';

/**
 * User Service
 */
export default class UserService extends Service {
  public async create(obj) {
    return await this.ctx.model.User.create(obj);
  }
}
