import { Button } from '@antmjs/vantui';
import { observer } from 'mobx-react';

import { MainNav } from '../components/MainNav';
import counterStore from '../store/counter';

definePageConfig({
  navigationBarTitleText: '首页'
});

export default observer(() => {
  const { counter } = counterStore;

  return (
    <>
      <span>index</span>

      <Button type='primary' onClick={() => counterStore.reduceCount()}>
        -
      </Button>

      <span>{counter}</span>

      <Button type='primary' onClick={() => counterStore.addCount()}>
        +
      </Button>

      <MainNav path='home' />
    </>
  );
});
