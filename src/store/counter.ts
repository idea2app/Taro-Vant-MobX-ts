import { action, observable } from 'mobx';

export class CounterStore {
  @observable
  accessor counter = 1;

  @action
  addCount() {
    this.counter++;
  }

  @action
  reduceCount() {
    this.counter--;
  }
}

export default new CounterStore();
