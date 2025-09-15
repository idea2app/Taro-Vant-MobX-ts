import { Request } from 'koajax';
import { request } from 'koajax-taro-adapter';
import { githubClient } from 'mobx-github';

export function baseRequest<B>({ path, ...option }: Request<B>) {
  const { pathname, search } = new URL(path, this.baseURI);

  return request<B>({
    ...option,
    path: `${this.baseURI}${pathname.slice(1)}${search}`
  });
}

if (typeof fetch !== 'function') {
  githubClient.baseURI = 'https://oss-toolbox.kaiyuanshe.cn/api/GitHub/';

  githubClient.baseRequest = baseRequest;
}
