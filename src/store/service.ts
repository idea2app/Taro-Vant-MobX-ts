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

if (process.env.TARO_ENV !== 'h5') {
  githubClient.baseURI = 'https://bazaar.fcc-cd.dev/api/GitHub/';

  githubClient.baseRequest = baseRequest;
}
