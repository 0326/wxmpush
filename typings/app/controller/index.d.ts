// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportSubscriber from '../../../app/controller/subscriber';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    subscriber: ExportSubscriber;
  }
}
