import { TypeKeys } from 'web-utility';
import { action, observable } from 'mobx';
import { showLoading, hideLoading } from '@tarojs/taro';

import { call } from './service';

export interface Base {
  objectId: string;
  createdAt: string;
  updatedAt: string;
}

export interface BaseFilter {
  pageIndex?: number;
  pageSize?: number;
  keyword?: string;
}

export default abstract class BaseModel<
  Current extends Base,
  Filter extends BaseFilter = BaseFilter
> {
  abstract path: string;

  @observable list: Current[] = [];
  @observable hasMore = false;
  @observable loading = false;
  @observable filter: Filter = {} as Filter;

  @observable current: Current = {} as Current;

  clearCurrent() {
    this.current = {} as Current;
  }

  clearList() {
    this.filter = {} as Filter;
    this.list = [];
    this.hasMore = false;
  }

  setCurrent(newCurrent: Partial<Current>) {
    return (this.current = { ...this.current, ...newCurrent });
  }

  async getList(
    { pageIndex = 1, pageSize = 10, ...filter }: Filter = {} as Filter
  ) {
    if (!pageIndex) pageIndex = 1;
    if (pageIndex === 1) this.clearList();

    if (this.loading) return;

    this.filter = { ...this.filter, ...filter, pageIndex };

    const {
      body: { data, count }
    } = await call(this.path, 'GET', {
      pageIndex,
      pageSize,
      ...this.filter
    });
    this.list = [...this.list, ...data];
    this.hasMore = this.list.length < count;
    return this.list;
  }

  @toggle('loading')
  @action
  async getOne(id: string) {
    this.clearCurrent();

    if (this.loading) return;

    const { body } = await call(`${this.path}/${id}`, 'GET');

    return (this.current = body);
  }

  @toggle('loading')
  async updateOne({ objectId: id, ...data }: Partial<Current>) {
    const { body } = await (id
      ? call(`${this.path}/${id}`, 'PUT', data)
      : call(this.path, 'POST', data));

    return body;
  }

  @toggle('loading')
  async deleteOne(id: string) {
    const { body } = await call(this.path, 'DELETE', { id });

    return body;
  }
}

export function toggle<
  Current extends Base,
  Filter extends BaseFilter = BaseFilter
>(key: TypeKeys<BaseModel<Current, Filter>, boolean>) {
  return (_: any, __: string, meta: PropertyDescriptor) => {
    const origin = meta.value as () => Promise<any>;

    meta.value = async function (...data: any[]) {
      this[key] = true;

      showLoading();
      try {
        return await origin.apply(this, data);
      } finally {
        this[key] = false;

        hideLoading();
      }
    };
  };
}
