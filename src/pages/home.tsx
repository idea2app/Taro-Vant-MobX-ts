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
      <div className='flex items-center justify-center p-4'>
        <span>index</span>

        <Button type='primary' onClick={() => counterStore.reduceCount()}>
          -
        </Button>

        <span>{counter}</span>
        <Button
          className='ml-4'
          type='primary'
          onClick={() => counterStore.addCount()}
        >
          +
        </Button>
      </div>

      <MainNav path='home' />
    </>
  );
});
