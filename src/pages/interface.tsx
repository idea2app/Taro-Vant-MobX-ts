import '../store/service';

import { Cell, CellGroup } from '@antmjs/vantui';
import { RepositoryModel } from 'mobx-github';

import { MainNav } from '../components/MainNav';
import { ScrollList } from '../components/ScrollList';
import { i18n } from '../store/Translation';

definePageConfig({
  navigationBarTitleText: '请求接口'
});

const repositoryStore = new RepositoryModel('idea2app');

export default () => (
  <>
    <ScrollList
      style={{ height: '90vh' }}
      translator={i18n}
      store={repositoryStore}
      renderList={allItems => (
        <CellGroup>
          {allItems.map(({ full_name, description }) => (
            <Cell key={full_name} title={full_name} label={description} />
          ))}
        </CellGroup>
      )}
    />
    <MainNav path='interface' />
  </>
);
