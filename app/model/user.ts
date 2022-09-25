import { EggAppConfig } from 'egg';

module.exports = (app: EggAppConfig) => {
  const { STRING, INTEGER } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: STRING(20), unique: true, allowNull: false },
    pwd: { type: STRING(20), unique: false, allowNull: true },
    type: STRING(20),
  });

  User.customMethod = async function() {
    //
  };

  return User;
};
