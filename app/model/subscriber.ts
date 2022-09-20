'use strict';

import { EggAppConfig } from 'egg';

module.exports = (app: EggAppConfig) => {
  const { STRING, INTEGER } = app.Sequelize;

  const Subscriber = app.model.define('subscriber', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(45),
    webhook: STRING(100),
    // creatorId: INTEGER,
    type: INTEGER,
  });

  Subscriber.customMethod = async function() {
    //
  };

  return Subscriber;
};
