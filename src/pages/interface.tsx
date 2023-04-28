import { PureComponent } from 'react';

import { GitList } from '../components/GitList';
import { MainNav } from '../components/MainNav';

definePageConfig({
  navigationBarTitleText: '请求接口'
});

export default class InterfacePage extends PureComponent {
  render() {
    return (
      <>
        <GitList style={{ height: '90vh' }} />

        <MainNav path='interface' />
      </>
    );
  }
}
