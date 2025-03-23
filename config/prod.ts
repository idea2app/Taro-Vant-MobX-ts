import type { UserConfigExport } from '@tarojs/cli';

export default {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {},
  mini: {},
  h5: {
    publicPath: '.'
  }
} satisfies UserConfigExport;
