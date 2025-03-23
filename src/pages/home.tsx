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
      <div className='flex items-center justify-center p-6 bg-red-50'>
        <span>index</span>

        <Button type='primary' onClick={() => counterStore.reduceCount()}>
          -
        </Button>

        <span>{counter}</span>
        <Button type='primary' onClick={() => counterStore.addCount()}>
          +
        </Button>
      </div>

      <MainNav path='home' />
    </>
  );
});
