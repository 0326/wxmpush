export * from './subscriber';
export * from './source';
export * from './common';

export function errorResHandler(errors: ValidateError[]) {
  const error = errors[0];
  return {
    data: null,
    errorMsg: `参数错误, ${error.field || ''} ${error.message}`,
    errorCode: 'paramsError',
    success: true,
  };
}

export function successResHandler(data) {
  return {
    errorMsg: null,
    errorCode: null,
    data: data?.dataValues ? data.dataValues : data,
    success: true,
  };
}

