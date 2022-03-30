import { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Text } from '@tarojs/components';
import { Button } from '@taroify/core';

import { MainNav } from '../components/MainNav';
import type { StoreProps } from '../app';

definePageConfig({
  navigationBarTitleText: '首页'
});

interface Index {
  props: StoreProps;
}

@inject('store')
@observer
class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { counterStore } = this.props.store;
    const { counter } = counterStore;

    return (
      <div>
        <span>index</span>
        <Button onClick={() => counterStore.reduceCount()} color="success">
          -
        </Button>
        <Text>{counter}</Text>
        <Button onClick={() => counterStore.addCount()} color="primary">
          +
        </Button>

        <MainNav path="home" />
      </div>
    );
  }
}

export default Index;
