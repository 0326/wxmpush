import { Service } from 'egg';

export default class Source extends Service {

  public async findAndCountAll(pageNo: number, pageSize: number) {
    const { count, rows } = await this.ctx.model.Source.findAndCountAll({
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
    const result = await this.ctx.model.Source.destroy({ where: { id } });
    const success = result === 1;
    return success;
  }

  public async update(id: number, name: string, type: string) {
    const result = await this.ctx.model.Source.update({ name, type }, { where: { id } });
    const success = result[0] === 1;
    return success;
  }

  public async create(name: string, type: string, source: string) {
    const sourceIsExited = await this.ctx.model.Source.findOne({ where: { source } });
    if (sourceIsExited) {
      return {
        errorMsg: '当前source已存在，不允许重复添加',
        errorCode: 'sourceIsExited',
      };
    }
    const result = await this.ctx.model.Source.create({
      name,
      source,
      type,
    });
    return result;
  }
}
