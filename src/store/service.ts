import { request, showModal } from '@tarojs/taro';
import { Request } from 'koajax';
import { githubClient } from 'mobx-github';

if (typeof fetch !== 'function') {
  githubClient.baseURI = 'https://oss-toolbox.kaiyuanshe.cn/api/GitHub/';

  githubClient.baseRequest = function <B>({
    method,
    path,
    headers,
    body
  }: Request<B>) {
    const { token } = this;

    const response = request({
      method,
      url: new URL(path, this.baseURI) + '',
      header: token
        ? { ...headers, Authorization: `Bearer ${token}` }
        : headers,
      mode: 'cors',
      data: body
    }).then(({ statusCode, errMsg, header, data }) => {
      if (statusCode < 300)
        return {
          status: statusCode,
          statusText: errMsg,
          headers: header,
          body: data
        };
      const { message } = data;

      if (method !== 'GET' || path !== 'session' || statusCode !== 401)
        showModal({ title: statusCode === 401 ? '需要登录' : message });

      throw new URIError(message);
    });

    async function* progress() {}

    return { response, download: progress() };
  };
}
