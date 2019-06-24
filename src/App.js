import React, { Component } from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Navbar from "./components/layout/Navbar";
import Expenses from "./components/expenses/Expenses";
import EditExpenseModal from "./components/expenses/EditExpenseModal";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Expenses} />
                <Route
                  exact
                  path="/expense/edit/:id"
                  component={EditExpenseModal}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
