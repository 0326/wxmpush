import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1663518851522_1311';

  // add your egg config in here
  config.middleware = [ 'errorHandler' ];
  // 只对 /api 前缀的 url 路径生效
  config.errorHandler = {
    match: '/api',
  };

  config.testLarkWebhook = 'https://open.feishu.cn/open-apis/bot/v2/hook/0e8bbdd3-0f14-48b3-b100-08a9e902ab74';

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
