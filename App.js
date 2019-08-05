import React from "react";
import { createAppContainer } from "react-navigation";
import { Provider } from "react-redux";
import navigator from "./src/navigation/navigator";
import store from "./src/redux/store/configureStore";
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

const Container = createAppContainer(navigator);
