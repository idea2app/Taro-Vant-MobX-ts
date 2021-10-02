import { Button } from '@taroify/core'
import { View } from '@tarojs/components'
import { Component } from 'react'
import './index.less'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <span>简阳妇联 Hello world!</span>
        <Button>点击</Button>
        <Button color="primary">主要按钮</Button>
      </View>
    )
  }
}
