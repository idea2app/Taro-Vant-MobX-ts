import { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';
import { Text } from '@tarojs/components';
import { Button } from '@taroify/core';

import { MainNav } from '../components/MainNav';
import { StoreProps } from '../store';

definePageConfig({
  navigationBarTitleText: '首页'
});

@inject('store')
@observer
export default class HomePage extends PureComponent<StoreProps> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { counterStore } = this.props.store;
    const { counter } = counterStore;

    return (
      <>
        <span>index</span>
        <Button onClick={() => counterStore.reduceCount()} color="success">
          -
        </Button>
        <Text>{counter}</Text>
        <Button onClick={() => counterStore.addCount()} color="primary">
          +
        </Button>

        <MainNav path="home" />
      </>
    );
  }
}
