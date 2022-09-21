import { Controller } from 'egg';
import { createSubscriber, updateSubscriber, findAllSubscriber, successResHandler, errorResHandler } from '../validate';

export default class SubscriberController extends Controller {
  public async createPage() {
    const { ctx } = this;
    await ctx.render('subscriber/create.njk', { time: new Date() });
  }

  public async updatePage() {
    const { ctx } = this;
    const { id } = ctx.request.query;
    let data;
    if (id) {
      data = await ctx.model.Subscriber.findByPk(id);
    }
    await ctx.render('subscriber/update.njk', { data });
  }

  public async listPage() {
    const { ctx } = this;
    const { pageNo = '1', pageSize = '10' } = ctx.request.query;
    const errors = ctx.app.validator.validate(findAllSubscriber, { pageNo, pageSize });
    let error;
    if (errors) {
      error = errorResHandler(errors);
    }

    const { list, total } = await ctx.service.subscriber.findAndCountAll(parseInt(pageNo) || 1, parseInt(pageSize) || 10);
    await ctx.render('subscriber/list.njk', { time: new Date(), list, total, error });
  }

  public async create() {
    const { ctx } = this;
    const data: any = ctx.request.body;
    const errors = ctx.app.validator.validate(createSubscriber, data);
    if (errors) {
      ctx.body = errorResHandler(errors);
      return;
    }
    const result = await ctx.service.subscriber.create(
      data.name,
      parseInt(data.type),
      data.webhook,
    );
    ctx.body = successResHandler(result);
  }

  public async update() {
    const { ctx } = this;
    const data: any = ctx.request.body;
    const errors = ctx.app.validator.validate(updateSubscriber, data);
    if (errors) {
      ctx.body = errorResHandler(errors);
      return;
    }
    const updateSuccess = await ctx.service.subscriber.update(
      parseInt(data.id),
      data.name,
      parseInt(data.type),
    );
    ctx.body = successResHandler(updateSuccess);
  }

  public async delete() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    const deleteSuccess = await ctx.service.subscriber.delete(parseInt(id));
    ctx.body = successResHandler(deleteSuccess);
  }
}
