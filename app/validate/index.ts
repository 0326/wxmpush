export * from './subscriber';

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
    data,
    errorMsg: null,
    errorCode: null,
    success: true,
  };
}
