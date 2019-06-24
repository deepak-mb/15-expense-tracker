import React, { Component } from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";

//Components
import Navbar from "./components/layout/Navbar";
import Expenses from "./components/expenses/Expenses";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <div className="container">
            <Expenses />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
