import { observable, action } from 'mobx';

export class CounterStore {
  @observable
  counter = 1;

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
