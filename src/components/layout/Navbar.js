import React, { Component } from "react";
import AddExpenseModal from "../expenses/AddExpenseModal";

class Navbar extends Component {
  state = {
    show: true
  };
  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="!#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="!#" onClick={this.showModal}>
                Add
              </a>
              <AddExpenseModal
                show={this.state.show}
                handleClose={this.hideModal}
              />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
