import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  // 挂载鉴权路由
  app.passport.mount('github');

  router.get('/', controller.home.index);
  router.get('/subscriber/create', controller.subscriber.createPage);
  router.get('/subscriber/list', controller.subscriber.listPage);
  router.get('/subscriber/update', controller.subscriber.updatePage);
  router.get('/source/create', controller.source.createPage);
  router.get('/source/list', controller.source.listPage);
  router.get('/source/update', controller.source.updatePage);

  router.post('/api/subscriber/create', controller.subscriber.create);
  router.post('/api/subscriber/update', controller.subscriber.update);
  router.post('/api/subscriber/delete', controller.subscriber.delete);
  router.post('/api/source/create', controller.source.create);
  router.post('/api/source/update', controller.source.update);
  router.post('/api/source/delete', controller.source.delete);
};
