import { Service } from 'egg';

export default class Subscriber extends Service {

  public async findAndCountAll(pageNo: number, pageSize: number) {
    const { count, rows } = await this.ctx.model.Subscriber.findAndCountAll({
      limit: pageSize,
      offset: (pageNo - 1) * pageSize, // pageNo 从 1 开始计算
      // where: {
      //   creatorId: null,
      // },
    });
    return {
      total: count,
      list: rows,
    };
  }

  public async delete(id: number) {
    const result = await this.ctx.model.Subscriber.destroy({ where: { id } });
    const success = result === 1;
    return success;
  }

  public async update(id: number, name: string, type: number) {
    const result = await this.ctx.model.Subscriber.update({ name, type }, { where: { id } });
    const success = result[0] === 1;
    return success;
  }

  public async create(name: string, type: number, webhook: string) {
    const webhookIsExited = await this.ctx.model.Subscriber.findOne({ where: { webhook } });
    if (webhookIsExited) {
      return {
        errorMsg: '当前webhook已存在，不允许重复添加',
        errorCode: 'webhookIsExited',
      };
    }
    const result = await this.ctx.model.Subscriber.create({
      name,
      webhook,
      type,
    });
    return result;
  }
}
