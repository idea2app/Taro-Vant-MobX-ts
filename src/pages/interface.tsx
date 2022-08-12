import { inject, observer } from 'mobx-react';
import { PureComponent } from 'react';

import { MainNav } from '../components/MainNav';
import { StoreProps } from '../store';

definePageConfig({
  navigationBarTitleText: '请求接口'
});

@inject('store')
@observer
export default class InterfacePage extends PureComponent<StoreProps> {
  componentDidMount() {
    this.props.store.repositoryStore.getList();
  }

  componentWillUnmount() {
    this.props.store.repositoryStore.clear();
  }

  render() {
    const { currentPage } = this.props.store.repositoryStore;

    return (
      <>
        <ul>
          {currentPage.map(({ full_name, html_url }) => (
            <li>
              <a target="_blank" href={html_url}>
                {full_name}
              </a>
            </li>
          ))}
        </ul>

        <MainNav path="interface" />
      </>
    );
  }
}
