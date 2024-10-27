// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    [
      'taro',
      {
        framework: 'preact',
        ts: true,
        decoratorsBeforeExport: true,
        decoratorsLegacy: false
      }
    ]
  ],
  plugins: [
    // https://babeljs.io/docs/babel-plugin-proposal-decorators#note-compatibility-with-babelplugin-transform-class-properties
    ['@babel/plugin-proposal-decorators', { version: '2023-05' }],
    [
      'import',
      {
        libraryName: '@antmjs/vantui',
        libraryDirectory: 'es',
        style: true
      },
      '@antmjs/vantui'
    ]
  ]
};
