import { Service } from 'egg';

/**
 * OAuth Service
 */
export default class AuthorizationService extends Service {

  public async getAuthUser({ id, provider }) {
    const data = await this.ctx.model.Authorization.findOne({
      where: {
        uid: id,
        provider,
      },
    });
    if (data?.dataValues) {
      return data.dataValues;
    }
    throw new Error('授权用户不存在');
  }

  public async create(obj) {
    return await this.ctx.model.Authorization.create(obj);
  }
}
