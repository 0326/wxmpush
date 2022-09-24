// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportSource from '../../../app/model/source';
import ExportSubscriber from '../../../app/model/subscriber';

declare module 'egg' {
  interface IModel {
    Source: ReturnType<typeof ExportSource>;
    Subscriber: ReturnType<typeof ExportSubscriber>;
  }
}
