import { httpRequest } from './https';

export const getLoginAuth = (url: string, params?: any) => {
  return httpRequest({
    method: 'get',
    url,
    params,
  });
};
