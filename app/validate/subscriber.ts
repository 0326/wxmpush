// https://github.com/eggjs/egg-validate
// https://github.com/node-modules/parameter
import { RULE_STR_NUM, RULE_NAME } from './common';

export const createSubscriber = {
  name: RULE_NAME,
  type: { type: 'enum', values: [ '1', '2' ] },
  webhook: { type: 'string', required: true, allowEmpty: false, max: 100 },
};

export const updateSubscriber = {
  id: RULE_STR_NUM,
  name: RULE_NAME,
  type: RULE_STR_NUM,
};

export const findAllSubscriber = {
  pageNo: RULE_STR_NUM,
  pageSize: RULE_STR_NUM,
};
