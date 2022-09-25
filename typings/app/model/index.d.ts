// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuthorization from '../../../app/model/authorization';
import ExportSource from '../../../app/model/source';
import ExportSubscriber from '../../../app/model/subscriber';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Authorization: ReturnType<typeof ExportAuthorization>;
    Source: ReturnType<typeof ExportSource>;
    Subscriber: ReturnType<typeof ExportSubscriber>;
    User: ReturnType<typeof ExportUser>;
  }
}
