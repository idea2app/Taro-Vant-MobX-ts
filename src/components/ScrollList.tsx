import { ScrollView, ScrollViewProps } from '@tarojs/components';
import debounce from 'lodash.debounce';
import { when } from 'mobx';
import { TranslationModel } from 'mobx-i18n';
import { observer } from 'mobx-react';
import { DataObject, Filter, ListModel, Stream } from 'mobx-restful';
import { Component, ReactNode } from 'react';

export interface ScrollListProps<T extends DataObject = DataObject>
  extends Pick<ScrollViewProps, 'className' | 'style'> {
  translator: TranslationModel<string, 'load_more' | 'no_more'>;
  store: ListModel<T>;
  filter?: Filter<T>;
  defaultData?: T[];
  renderList(allItems: T[]): ReactNode;
}

@observer
export class ScrollList<T extends DataObject = DataObject> extends Component<
  ScrollListProps<T>
> {
  async componentDidMount() {
    const BaseStream = Stream<DataObject>,
      { filter, defaultData } = this.props;

    const store = this.props.store as unknown as InstanceType<
      ReturnType<typeof BaseStream>
    >;
    await when(() => store.downloading < 1);

    store.clear();

    if (defaultData) await store.restoreList({ allItems: defaultData, filter });

    await store.getList(filter, store.pageList.length + 1);
  }

  componentWillUnmount() {
    this.props.store.clear();
  }

  loadMore = debounce(() => {
    const { store } = this.props;

    if (store.downloading < 1 && !store.noMore) store.getList();
  });

  render() {
    const { className, style, translator, store, renderList } = this.props;
    const { t } = translator,
      { noMore, allItems } = store;

    return (
      <ScrollView
        {...{ className, style }}
        scrollY
        onScrollToLower={this.loadMore}
      >
        {renderList(allItems)}

        <footer className='mt-4 text-center text-muted small'>
          {noMore || !allItems.length ? t('no_more') : t('load_more')}
        </footer>
      </ScrollView>
    );
  }
}
