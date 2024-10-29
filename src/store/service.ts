import { request } from 'koajax-taro-adapter';
import { githubClient } from 'mobx-github';

if (typeof fetch !== 'function') {
  githubClient.baseRequest = request;
  githubClient.baseURI = 'https://oss-toolbox.kaiyuanshe.cn/api/GitHub/';
}
