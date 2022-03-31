import Taro, {
  getStorageSync,
  request,
  showModal,
  uploadFile
} from '@tarojs/taro';

export const API_ROOT = '';

export async function call<T = any>(
  path: string,
  method: keyof Taro.request.Method = 'GET',
  data?: any,
  header?: Record<string, string>
): Promise<{ headers: Record<string, string>; body: T }> {
  const token = getStorageSync('token');

  const {
    statusCode,
    header: headers,
    data: body
  } = await request({
    method,
    url: API_ROOT + path,
    header: token ? { ...header, Authorization: `Bearer ${token}` } : header,
    data,
    mode: 'cors'
  });

  if (statusCode > 299) {
    const { message } = body;

    if (method !== 'GET' || path !== 'session' || statusCode !== 401)
      showModal({ title: statusCode === 401 ? '需要登录' : message });

    throw new URIError(message);
  }
  return { headers, body };
}

export async function upload<T = any>(
  path: string,
  filePath: string
): Promise<{ body: T }> {
  const token = getStorageSync('token');

  // @ts-ignore
  const { statusCode, data: body } = await uploadFile({
    url: API_ROOT + path,
    filePath,
    name: 'data',
    header: {
      Authorization: `Bearer ${token}`
    }
  });
  if (statusCode > 299) {
    const { message } = body;

    if (path !== 'session' || statusCode !== 401)
      showModal({ title: statusCode === 401 ? '请登录' : message });

    throw new URIError(message);
  }

  return { body };
}
