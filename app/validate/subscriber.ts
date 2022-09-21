
export const createSubscriber = {
  name: { type: 'string', required: true, allowEmpty: false, max: 20 },
  type: { type: 'enum', values: [ '1', '2' ] },
  webhook: { type: 'string', required: true, allowEmpty: false, max: 100 },
};
