import './app.css';

import { configure } from 'mobx';
import { PropsWithChildren, PureComponent } from 'react';

configure({ useProxies: 'ifavailable', enforceActions: 'never' });

export default class App extends PureComponent<PropsWithChildren> {
  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return <>{this.props.children}</>;
  }
}
