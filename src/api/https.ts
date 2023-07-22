import axios, { AxiosRequestConfig, Method } from 'axios';
import { Message } from '@arco-design/web-react';

const instance = axios.create({
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// request interceptor
instance.interceptors.request.use(
  (config) => {
    // do something before request is sent
    //先判断store里的user在不在
    // const token = store.state.user.token;
    const token = '123456';
    if (token) {
      // let each request carry token
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
instance.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data;
    console.log('res', res);

    // if the custom code is not 200, it is judged as an error.
    if (res.code !== 200) {
      Message.error(res.msg);
      // 412: Token expired;
      if (res.code === 412) {
        //清空store内用户数据
        // store.dispatch({
        //   type: 'update-userInfo'
        // });
        setTimeout(() => {
          window.location.href = `${window.location.origin}/login`;
        }, 2000);
      }
      return Promise.reject(res.msg || 'Error');
    } else {
      return res;
    }
  },
  (error) => {
    console.log('err' + error);
    Message.error(error.message);
    return Promise.reject(error.message);
  }
);
/*？*
 * 请求方法
 * @param url 请求地址
 * @param method 请求方式 默认 get
 * @param params 请求参数
 * @param options 其他配置
 * @param errorMsg 请求失败的错误提示
 * @param onlyReturnData 是否只返回data，不包含code，message等信息， 默认为true
 * @returns Promise
 */

export interface HttpProps {
  url: string;
  method?: Method;
  params?: any;
  options?: any;
  headers?: any;
  errorMsg?: string;
  isOnlyReturnData?: boolean;
}

const httpRequest = (params: HttpProps): Promise<any> => {
  return new Promise((resolve, reject) => {
    const method = params.method || 'get';
    const localParam: AxiosRequestConfig = {
      url: params.url,
      method,
      headers: Object.assign(params.headers || {}, {
        // 'x-auth-token': localStorage.getItem('Token'),
      }),
      ...params.options,
      maxRedirects: 1,
    };
    if (['post', 'put', 'patch'].includes(method.toLocaleLowerCase())) {
      localParam.data = params.params;
    } else {
      localParam.params = params.params;
    }
    instance(localParam).then(
      (res: any) => {
        const { code, message } = res;
        let result;
        resolve(res);
      },
      (err) => {
        console.error(err);
        const msg = params.errorMsg || err.message || '请求失败';
        Message.error(msg);
        reject(err);
      }
    );
  });
};

export { httpRequest };
