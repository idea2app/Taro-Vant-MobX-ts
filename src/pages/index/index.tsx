import { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Text, View } from '@tarojs/components';
import { Button } from '@taroify/core';

import type { StoreProps } from '../../app';
import './index.less';

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
      <View className="index">
        <span>index</span>
        <Button onClick={() => counterStore.reduceCount()} color="success">
          -
        </Button>
        <Text>{counter}</Text>
        <Button onClick={() => counterStore.addCount()} color="primary">
          +
        </Button>
      </View>
    );
  }
}

export default Index;
