# Taro-Vant-MobX.ts

[Taro][1] project scaffold based on [TypeScript][2], [Preact][3], [MobX][4] & [Vant][5]

[![CI & CD](https://github.com/idea2app/Taro-Vant-MobX-ts/actions/workflows/main.yml/badge.svg)][6]

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)][7]
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)][8]

## Demo

https://idea2app.github.io/Taro-Vant-MobX-ts/

## Technology stack

- Language: [TypeScript v5][2]
- Component engine: [Preact 10][3]
- State management: [MobX v4][4]
- Component suite: [AntM Vant UI v3][5] + [Bootstrap v5 (CSS utility)][9]
- CI / CD: GitHub [Actions][10] + [Pages][11]

## Extra components

1. [Range Field](src/components/RangeField.tsx)
2. [Area Select](src/components/AreaSelect.tsx)

## Best practice

1. Install **[Settings][12] GitHub app** in your account or organization
2. Click the **[<kbd>Use this template</kbd>][13] button** on the top of this GitHub repository's home page, then create your own repository in the app-installed namespace above
3. Click the **[<kbd>Open in GitHub codespaces</kbd>][7] button** on the top of ReadMe file, then an **online VS Code development environment** will be started immediately

4. Set [Vercel variables][14] as [Repository secrets][15], then every commit will get an independent **Preview URL**

5. Recommend to add a [Notification step in GitHub actions][16] for your Team IM app
6. Remind the PMs & users of your product to submit **Feature/Enhancement** requests or **Bug** reports with [Issue forms][17] instead of IM messages or Mobile Phone calls
7. Collect all these issues into [Project kanbans][18], then create **Pull requests** & add `closes #issue_number` into its description for automation

## Development

### Install dependencies

```shell
npm i pnpm -g
pnpm i
```

### Start Dev-server

```shell
pnpm dev h5
# or
pnpm dev weapp
```

### Mini-app Debug

#### Windows

```shell
winget install Tencent.WeixinDevTools
winget install Tencent.qq-devtool
winget install Alibaba.MiniProgramStudio
winget install ByteDance.DouyinIDE
winget install Baidu.SwanIDE
```

#### Mac OS X

```shell
brew install --cask wechatwebdevtools
```

## Deployment

```shell
pnpm build h5
# or
pnpm build weapp
```

[1]: https://taro-docs.jd.com/
[2]: https://www.typescriptlang.org/
[3]: https://preactjs.com/
[4]: https://github.com/mobxjs/mobx/blob/mobx4and5/docs/
[5]: https://antmjs.github.io/vantui/
[6]: https://github.com/idea2app/Taro-Vant-MobX-ts/actions/workflows/main.yml
[7]: https://codespaces.new/idea2app/Taro-Vant-MobX-ts
[8]: https://gitpod.io/?autostart=true#https://github.com/idea2app/Taro-Vant-MobX-ts
[9]: https://getbootstrap.com/docs/5.1/getting-started/contents/#css-files
[10]: https://github.com/features/actions
[11]: https://pages.github.com/
[12]: https://github.com/apps/settings
[13]: https://github.com/new?template_name=Taro-Vant-MobX-ts&template_owner=idea2app
[14]: https://github.com/idea2app/Next-Bootstrap-ts/blob/80967ed49045af9dbcf4d3695a2c39d53a6f71f1/.github/workflows/pull-request.yml#L9-L11
[15]: https://github.com/idea2app/Taro-Vant-MobX-ts/settings/secrets/actions
[16]: https://github.com/kaiyuanshe/kaiyuanshe.github.io/blob/bb4675a56bf1d6b207231313da5ed0af7cf0ebd6/.github/workflows/pull-request.yml#L32-L56
[17]: https://github.com/idea2app/Taro-Vant-MobX-ts/issues/new/choose
[18]: https://github.com/idea2app/Taro-Vant-MobX-ts/projects
