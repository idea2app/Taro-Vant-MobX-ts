import { redirectTo } from '@tarojs/taro';
import { Tabbar } from '@taroify/core';
import { ClusterOutlined, Points } from '@taroify/icons';

export interface MainNavProps {
  path: string;
}

export function MainNav({ path }: MainNavProps) {
  return (
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
    </Tabbar>
  );
}
