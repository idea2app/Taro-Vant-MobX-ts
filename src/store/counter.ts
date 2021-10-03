import { action, observable } from "mobx";

class CounterStore {
  @observable counter = 1;

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
