import { Controller } from 'egg';
import { createSource, updateSource, findAllSource, successResHandler, errorResHandler } from '../validate';

export default class SourceController extends Controller {
  public async createPage() {
    const { ctx } = this;
    await ctx.render('source/create.njk', { time: new Date() });
  }

  public async updatePage() {
    const { ctx } = this;
    const { id } = ctx.request.query;
    let data;
    if (id) {
      data = await ctx.model.Source.findByPk(id);
    }
    await ctx.render('source/update.njk', { data });
  }

  public async listPage() {
    const { ctx } = this;
    const { pageNo = '1', pageSize = '10' } = ctx.request.query;
    const errors = ctx.app.validator.validate(findAllSource, { pageNo, pageSize });
    let error;
    if (errors) {
      error = errorResHandler(errors);
    }

    const { list, total } = await ctx.service.source.findAndCountAll(parseInt(pageNo) || 1, parseInt(pageSize) || 10);
    await ctx.render('source/list.njk', { time: new Date(), list, total, error });
  }

  public async create() {
    const { ctx } = this;
    const data: any = ctx.request.body;
    const errors = ctx.app.validator.validate(createSource, data);
    if (errors) {
      ctx.body = errorResHandler(errors);
      return;
    }
    const result = await ctx.service.source.create(
      data.name,
      data.type,
      data.source,
    );
    if (result.errorCode) {
      ctx.body = { ...result, success: true };
      return;
    }

    ctx.body = successResHandler(result);
  }

  public async update() {
    const { ctx } = this;
    const data: any = ctx.request.body;
    const errors = ctx.app.validator.validate(updateSource, data);
    if (errors) {
      ctx.body = errorResHandler(errors);
      return;
    }
    const updateSuccess = await ctx.service.source.update(
      parseInt(data.id),
      data.name,
      data.type,
    );
    ctx.body = successResHandler(updateSuccess);
  }

  public async delete() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    const deleteSuccess = await ctx.service.source.delete(parseInt(id));
    ctx.body = successResHandler(deleteSuccess);
  }
}
