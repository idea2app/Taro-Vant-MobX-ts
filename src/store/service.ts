import {
  getStorageSync,
  request as call,
  setStorageSync,
  showModal,
  uploadFile
} from '@tarojs/taro';
import { ClientOptions, Request, RequestOptions, Response } from 'koajax';
import { BaseListModel } from 'mobx-restful';

type Client = BaseListModel<{}>['client'];

export class HTTPClient implements Client {
  baseURI: string;
  options: RequestOptions;

  constructor({ baseURI = '', ...options }: ClientOptions) {
    this.baseURI = baseURI;
    this.options = options;
  }

  set token(raw: string) {
    setStorageSync('token', raw);
  }

  get token(): string {
    return getStorageSync('token');
  }

  async request<B>({
    method,
    path,
    headers,
    body
  }: Request): Promise<Response<B>> {
    const { token } = this;

    const { statusCode, errMsg, header, data } = await call({
      // @ts-ignore
      method,
      url: `${this.baseURI}/${path}`,
      header: token
        ? { ...headers, Authorization: `Bearer ${token}` }
        : headers,
      mode: 'cors',
      data: body
    });

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
  }

  get<B>(
    path: string | URL,
    headers?: HeadersInit | undefined
  ): Promise<Response<B>> {
    return this.request({ method: 'GET', path, headers });
  }

  post<B>(
    path: string | URL,
    body?: any,
    headers?: HeadersInit | undefined
  ): Promise<Response<B>> {
    return this.request({ method: 'POST', path, body, headers });
  }

  put<B>(
    path: string | URL,
    body?: any,
    headers?: HeadersInit | undefined
  ): Promise<Response<B>> {
    return this.request({ method: 'PUT', path, body, headers });
  }

  patch<B>(
    path: string | URL,
    body?: any,
    headers?: HeadersInit | undefined
  ): Promise<Response<B>> {
    return this.request({ method: 'PATCH', path, body, headers });
  }

  delete<B>(
    path: string | URL,
    body?: any,
    headers?: HeadersInit | undefined
  ): Promise<Response<B>> {
    return this.request({ method: 'DELETE', path, body, headers });
  }

  async upload<B>(path: string, filePath: string): Promise<Response<B>> {
    const { token } = this;

    const { statusCode, errMsg, header, data } = await uploadFile({
      url: `${this.baseURI}/${path}`,
      filePath,
      name: 'data',
      header: { Authorization: `Bearer ${token}` }
    });
    const body = JSON.parse(data);

    if (statusCode < 300)
      return {
        status: statusCode,
        statusText: errMsg,
        headers: header || {},
        body
      };
    const { message } = body;

    showModal({ title: statusCode === 401 ? '请登录' : message });

    throw new URIError(message);
  }
}

export const client = new HTTPClient({ baseURI: 'https://api.github.com' });
