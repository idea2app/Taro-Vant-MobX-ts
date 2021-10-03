import { Button } from '@taroify/core';
import { Text, View } from '@tarojs/components';
import { inject, observer } from 'mobx-react';
import { Component } from 'react';
import './index.less';

type PageStateProps = {
  store: {
    counterStore: {
      counter: number,
      addCount: Function,
      reduceCount: Function,
    }
  }
}

interface Index {
  props: PageStateProps;
}

@inject('store')
@observer
class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { counterStore } = this.props.store;
    const { counter } = counterStore;

    return (
      <View className='index'>
        <span>index</span>
        <Button onClick={() => counterStore.reduceCount()} color="success">-</Button>
        <Text>{counter}</Text>
        <Button onClick={() => counterStore.addCount()} color="primary">+</Button>
      </View>
    )
  }
}

export default Index