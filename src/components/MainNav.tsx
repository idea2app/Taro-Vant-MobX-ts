import { Tabbar, TabbarItem } from '@antmjs/vantui';
import { redirectTo } from '@tarojs/taro';
import { FC } from 'react';

export interface MainNavProps {
  path: string;
}

export const MainNav: FC<MainNavProps> = ({ path }) => (
  <Tabbar
    border
    fixed
    safeAreaInsetBottom
    active={path}
    onChange={({ detail }) => redirectTo({ url: `/pages/${detail}` })}
  >
    <TabbarItem icon='points' name='home'>
      MobX
    </TabbarItem>
    <TabbarItem icon='cluster-o' name='component'>
      组件
    </TabbarItem>
    <TabbarItem icon='exchange' name='interface'>
      接口
    </TabbarItem>
  </Tabbar>
);
