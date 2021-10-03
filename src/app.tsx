import { Provider } from "mobx-react";
import { Component } from "react";
import "./app.less";
import counterStore from "./store/counter";

const store = {
  counterStore,
};

class App extends Component {
  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // this.props.children 是将要会渲染的页面
  render() {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    );
  }
}

export default App;
