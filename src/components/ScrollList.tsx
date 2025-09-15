import { ScrollView, ScrollViewProps } from '@tarojs/components';
import debounce from 'lodash.debounce';
import { TranslationModel } from 'mobx-i18n';
import { observer } from 'mobx-react';
import { isEqualProps, ObservedComponent, reaction } from 'mobx-react-helper';
import { DataObject, Filter, ListModel } from 'mobx-restful';
import { ReactNode } from 'react';

export interface ScrollListProps<T extends DataObject = DataObject>
  extends Pick<ScrollViewProps, 'className' | 'style'> {
  translator: TranslationModel<string, 'load_more' | 'no_more'>;
  store: ListModel<T>;
  filter?: Filter<T>;
  renderList(allItems: T[]): ReactNode;
}

@observer
export class ScrollList<
  T extends DataObject = DataObject
> extends ObservedComponent<ScrollListProps<T>> {
  componentDidMount() {
    super.componentDidMount?.();

    this.reload(this.props.filter, {});
  }

  componentWillUnmount() {
    super.componentWillUnmount?.();

    this.props.store.clear();
  }

  @reaction(({ observedProps }) => observedProps.filter)
  reload(newFilter?: Filter<T>, oldFilter?: Filter<T>) {
    if (!isEqualProps(newFilter, oldFilter))
      this.props.store.getList(newFilter, 1);
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

        <footer className='text-muted small mt-4 text-center'>
          {noMore || !allItems.length ? t('no_more') : t('load_more')}
        </footer>
      </ScrollView>
    );
  }
}
