import { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';
import { Button } from '@antmjs/vantui';

import { MainNav } from '../components/MainNav';
import { StoreProps } from '../store';

definePageConfig({
  navigationBarTitleText: '首页'
});

@inject('store')
@observer
export default class HomePage extends PureComponent<StoreProps> {
  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { counterStore } = this.props.store;
    const { counter } = counterStore;

    return (
      <>
        <span>index</span>

        <Button type="primary" onClick={() => counterStore.reduceCount()}>
          -
        </Button>

        <span>{counter}</span>

        <Button type="primary" onClick={() => counterStore.addCount()}>
          +
        </Button>

        <MainNav path="home" />
      </>
    );
  }
}
