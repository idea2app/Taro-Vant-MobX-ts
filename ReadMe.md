# Taro-Vant-MobX-ts

[Taro][1] project scaffold based on [TypeScript][2], [Preact][3], [MobX][4] & [Vant][5]

[![CI & CD](https://github.com/idea2app/Taro-Vant-MobX-ts/actions/workflows/main.yml/badge.svg)][6]

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)][7]
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)][8]

## Demo

https://idea2app.github.io/Taro-Vant-MobX-ts/

## Technology stack

- Language: [TypeScript v5][2]
- Component engine: [Preact v10][3]
- State management: [MobX v6][4]
- Component suite: [AntM Vant UI v3][5] + [Tailwind V4 (CSS utility)][9]
- CI / CD: GitHub [Actions][10] + [Pages][11]

## Extra components

1. [Scroll List](src/components/ScrollList.tsx)
2. [Range Field](src/components/RangeField.tsx)
3. [Area Select](src/components/AreaSelect.tsx)

## Best practice

1.  Install GitHub apps in your organization or account:
    1.  [Probot settings][12]: set up Issue labels & Pull Request rules
    2.  [PR badge][13]: set up Online [VS Code][14] editor entries in Pull Request description

2.  Click the **[<kbd>Use this template</kbd>][15] button** on the top of this GitHub repository's home page, then create your own repository in the app-installed namespace above

3.  Click the **[<kbd>Open in GitHub codespaces</kbd>][7] button** on the top of ReadMe file, then an **online VS Code development environment** will be started immediately

4.  Set [Vercel variables][16] as [Repository secrets][17], then every commit will get an independent **Preview URL**

5.  Recommend to add a [Notification step in GitHub actions][18] for your Team IM app

6.  Remind the PMs & users of your product to submit **Feature/Enhancement** requests or **Bug** reports with [Issue forms][19] instead of IM messages or Mobile Phone calls

7.  Collect all these issues into [Project kanbans][20], then create **Pull requests** & add `closes #issue_number` into its description for automation

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
[9]: https://tw.icebreaker.top/docs/quick-start/v4/taro-webpack
[10]: https://github.com/features/actions
[11]: https://pages.github.com/
[12]: https://github.com/apps/settings
[13]: https://pullrequestbadge.com/
[14]: https://code.visualstudio.com/
[15]: https://github.com/new?template_name=Taro-Vant-MobX-ts&template_owner=idea2app
[16]: https://github.com/idea2app/Taro-Vant-MobX-ts/blob/a25e770ae6b405eb1b152cec2f17f354c00be9fb/.github/workflows/main.yml#L12-L15
[17]: https://github.com/idea2app/Taro-Vant-MobX-ts/settings/secrets/actions
[18]: https://github.com/idea2app/Lark-Next-Bootstrap-ts/blob/0ba4561daef428b3a0d7c07653a51583c5fd5fe4/.github/workflows/main.yml#L31-L60
[19]: https://github.com/idea2app/Taro-Vant-MobX-ts/issues/new/choose
[20]: https://github.com/idea2app/Taro-Vant-MobX-ts/projects
