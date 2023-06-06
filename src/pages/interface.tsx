import { Cell, CellGroup } from '@antmjs/vantui';

import { MainNav } from '../components/MainNav';
import { ScrollList } from '../components/ScrollList';
import repositoryStore from '../store/Repository';
import { i18n } from '../store/Translation';

definePageConfig({
  navigationBarTitleText: '请求接口'
});

export default function InterfacePage() {
  return (
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
}
