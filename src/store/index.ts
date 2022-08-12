import { CounterStore } from './counter';
import { RepositoryModel } from './Repository';

export const counterStore = new CounterStore();
export const repositoryStore = new RepositoryModel();

const store = { counterStore, repositoryStore };

export interface StoreProps {
  store: typeof store;
}

export default store;
