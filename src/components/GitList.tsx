import { Cell, CellGroup } from '@antmjs/vantui';
import { observer } from 'mobx-react';

import repositoryStore, { Repository } from '../store/Repository';
import { i18n } from '../store/Translation';
import { ScrollList, ScrollListProps } from './ScrollList';

export type GitListProps = ScrollListProps<Repository>;

@observer
export class GitList extends ScrollList<GitListProps> {
  store = repositoryStore;
  translater = i18n;

  constructor(props: GitListProps) {
    super(props);

    this.boot();
  }

  renderList() {
    const { allItems } = repositoryStore;

    return (
      <CellGroup>
        {allItems.map(({ full_name, description }) => (
          <Cell key={full_name} title={full_name} label={description} />
        ))}
      </CellGroup>
    );
  }
}
