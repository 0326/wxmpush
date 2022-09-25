import { EggAppConfig } from 'egg';

module.exports = (app: EggAppConfig) => {
  const { STRING, INTEGER } = app.Sequelize;

  const Source = app.model.define('source', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(20),
    source: STRING(100),
    // creatorId: INTEGER,
    type: STRING(10),
  });

  Source.customMethod = async function() {
    //
  };

  return Source;
};
