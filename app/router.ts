import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/subscriber/create', controller.subscriber.createPage);
  router.post('/api/subscriber/create', controller.subscriber.create);
};
