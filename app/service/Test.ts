import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    const data = await this.ctx.curl(this.config.testLarkWebhook, {
      data: {
        msg_type: 'text',
        content: JSON.stringify({
          text: 'exmaple',
        }),
      },
      dataType: 'json',
    });
    console.log('data==', data.data);

    return `hi, ${name}`;
  }
}
