const config = {
  projectName: 'taro-vant-mobx-ts',
  date: '2021-9-26',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  compiler: 'webpack5',
  sourceRoot: 'src',
  outputRoot: 'dist',
  defineConstants: {},
  copy: {
    patterns: [],
    options: {}
  },
  framework: 'preact',
  plugins: [
    '@tarojs/plugin-html',
    [
      '@tarojs/plugin-http',
      {
        enableCookie: true,
        disabledFormData: false,
        disabledBlob: false
      }
    ]
  ],
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: true,
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    miniCssExtractPluginOption: {
      ignoreOrder: true
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: true,
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    esnextModules: [/@antmjs[\\/]vantui/]
  }
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
