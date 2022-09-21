import { Service } from 'egg';

export default class Subscriber extends Service {

  public async findAll(pageNo: string, pageSize = '10') {
    const result = await this.ctx.model.Subscriber.findAll({
      limit: parseInt(pageSize),
      offset: parseInt(pageNo),
    });
    return result;
  }


  public async create(name: string, type: number, webhook: string) {
    const result = await this.ctx.model.Subscriber.create({
      name,
      webhook,
      type,
    });
    return result;
  }
}
