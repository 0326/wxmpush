import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/subscriber/create', controller.subscriber.createPage);
  router.get('/subscriber/list', controller.subscriber.listPage);
  router.get('/subscriber/update', controller.subscriber.updatePage);

  router.post('/api/subscriber/create', controller.subscriber.create);
  router.post('/api/subscriber/update', controller.subscriber.update);
  router.post('/api/subscriber/delete', controller.subscriber.delete);
};
