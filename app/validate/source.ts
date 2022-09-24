// https://github.com/eggjs/egg-validate
// https://github.com/node-modules/parameter
import { RULE_STR_NUM, RULE_NAME } from './common';

export const createSource = {
  name: RULE_NAME,
  type: { type: 'enum', values: [ 'RSS', 'API', 'OTHER' ] },
  source: { type: 'string', required: true, allowEmpty: false, max: 100 },
};

export const updateSource = {
  id: RULE_STR_NUM,
  name: RULE_NAME,
  type: { type: 'string', required: true, allowEmpty: false, max: 10 },
};

export const findAllSource = {
  pageNo: RULE_STR_NUM,
  pageSize: RULE_STR_NUM,
};
