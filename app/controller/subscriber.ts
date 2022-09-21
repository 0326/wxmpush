import { Controller } from 'egg';
import { createSubscriber, successResHandler, errorResHandler } from '../validate';

export default class SubscriberController extends Controller {
  public async createPage() {
    const { ctx } = this;
    await ctx.render('subscriber/create.njk', { time: new Date() });
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
}
