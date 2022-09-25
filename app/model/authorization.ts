import { EggAppConfig } from 'egg';

module.exports = (app: EggAppConfig) => {
  const { STRING, INTEGER } = app.Sequelize;

  const Authorization = app.model.define('Authorization', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    uid: { type: STRING, unique: true, allowNull: false },
    userId: INTEGER,
    provider: STRING,
  });

  Authorization.customMethod = async function() {
    //
  };

  return Authorization;
};
