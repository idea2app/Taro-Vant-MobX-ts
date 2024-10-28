import { request } from 'koajax-taro-adapter';
import { githubClient } from 'mobx-github';

if (typeof XMLHttpRequest !== 'function' && typeof fetch !== 'function')
  githubClient.baseRequest = request;
