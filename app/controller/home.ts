import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    await ctx.render('home.njk', { time: new Date() });
  }
}
