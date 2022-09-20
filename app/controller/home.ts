import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    const data = await ctx.service.subscriber.findAll('0', '10');
    console.log('data ==', data);
    await ctx.render('home.tpl', { time: new Date(), data: JSON.stringify(data) });
  }
}
