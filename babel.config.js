// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    [
      'taro',
      {
        framework: 'preact',
        ts: true
      }
    ]
  ],
  plugins: [
    [
      'import',
      {
        libraryName: '@taroify/core',
        libraryDirectory: '',
        style: true
      },
      '@taroify/core'
    ]
  ]
};
