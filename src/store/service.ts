import { Request } from 'koajax';
import { request as baseRequest } from 'koajax-taro-adapter';
import { githubClient } from 'mobx-github';

if (typeof fetch !== 'function') {
  githubClient.baseURI = 'https://oss-toolbox.kaiyuanshe.cn/api/GitHub/';

  githubClient.baseRequest = function <B>({ path, ...option }: Request<B>) {
    const { pathname, search } = new URL(path, this.baseURI);

    return baseRequest({
      ...option,
      path: `${this.baseURI}${pathname.slice(1)}${search}`
    });
  };
}
