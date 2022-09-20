import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'wxmtest',
    password: 'wxmpwd',
    port: 3306,
    database: 'wxmpush',
  };

  return config;
};
