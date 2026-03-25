import { Event, EventTarget } from 'event-target-shim';
import { defaultHTTPRuntime, HTTPToolkit, Request } from 'koajax';
import { githubClient } from 'mobx-github';
import { Blob, fetch, Headers, ReadableStream } from 'taro-fetch-polyfill';

const { request } = new HTTPToolkit({
  ...defaultHTTPRuntime,
  Event: Event as typeof globalThis.Event,
  EventTarget: EventTarget as typeof globalThis.EventTarget,
  Headers,
  Blob,
  ReadableStream,
  fetch: fetch as typeof globalThis.fetch
});

/**
 * @see {@link https://github.com/NervJS/taro/pull/17472}
 */
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
