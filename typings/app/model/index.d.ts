// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportSubscriber from '../../../app/model/subscriber';

declare module 'egg' {
  interface IModel {
    Subscriber: ReturnType<typeof ExportSubscriber>;
  }
}
