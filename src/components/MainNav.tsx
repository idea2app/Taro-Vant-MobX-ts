import { FC } from 'react';
import { redirectTo } from '@tarojs/taro';
import { Tabbar } from '@taroify/core';
import { ClusterOutlined, Exchange, Points } from '@taroify/icons';

export interface MainNavProps {
  path: string;
}

export const MainNav: FC<MainNavProps> = ({ path }) => (
  <Tabbar
    bordered
    fixed
    safeArea="bottom"
    value={path}
    onChange={value => redirectTo({ url: `/pages/${value}` })}
  >
    <Tabbar.TabItem icon={<Points />} value="home">
      MobX
    </Tabbar.TabItem>
    <Tabbar.TabItem icon={<ClusterOutlined />} value="component">
      组件
    </Tabbar.TabItem>
    <Tabbar.TabItem icon={<Exchange />} value="interface">
      接口
    </Tabbar.TabItem>
  </Tabbar>
);
