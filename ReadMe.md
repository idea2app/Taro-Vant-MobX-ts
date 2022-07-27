# Taro-Vant-MobX-ts

[Taro][1] project scaffold based on [TypeScript][2], [Preact][3], [MobX][4] & [Vant][5]

[![CI & CD](https://github.com/idea2app/Taro-Vant-MobX-ts/actions/workflows/main.yml/badge.svg)][6]

## Demo

https://ideapp.dev/Taro-Vant-MobX-ts/

## Technology stack

- Language: [TypeScript v4][2]
- Component engine: [Preact 10][3]
- State management: [MobX v4][4]
- Component suite: [Taroify v0.1.0][5] + [Bootstrap v5 (CSS utility)][7]
- CI / CD: GitHub [Actions][8] + [Pages][9]

## Extra components

1. [Range Field](src/components/RangeField.tsx)
2. [Area Select](src/components/AreaSelect.tsx)

## Development

```shell
npm i pnpm -g
npm set strict-peer-dependencies=false

pnpm i
pnpm dev:h5
# pnpm dev:weapp
```

## Deployment

```shell
pnpm build:h5
# pnpm build:weapp
```

[1]: https://taro-docs.jd.com/
[2]: https://www.typescriptlang.org/
[3]: https://preactjs.com/
[4]: https://mobx.js.org/
[5]: https://taroify.gitee.io/taroify.com/introduce/
[6]: https://github.com/idea2app/Taro-Vant-MobX-ts/actions/workflows/main.yml
[7]: https://getbootstrap.com/docs/5.1/getting-started/contents/#css-files
[8]: https://github.com/features/actions
[9]: https://pages.github.com/
