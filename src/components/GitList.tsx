import { observer } from 'mobx-react';
import { CellGroup, Cell } from '@antmjs/vantui';

import { ScrollListProps, ScrollList } from './ScrollList';
import { i18n } from '../store/Translation';
import repositoryStore, { Repository } from '../store/Repository';

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
          <Cell title={full_name} label={description} />
        ))}
      </CellGroup>
    );
  }
}
