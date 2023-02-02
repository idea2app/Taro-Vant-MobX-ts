import { PropsWithChildren, PureComponent } from 'react';

import './app.less';

export default class App extends PureComponent<PropsWithChildren> {
  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return <>{this.props.children}</>;
  }
}
