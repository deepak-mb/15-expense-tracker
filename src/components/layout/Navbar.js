import React, { Component } from "react";
import AddExpenseModal from "../expenses/AddExpenseModal";
import { getCategories } from "../../actions/expenseActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Navbar extends Component {
  state = {
    show: false
  };
  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };
  componentDidMount() {
    this.props.getCategories();
  }
  render() {
    // console.log(this.props);
    const { categories } = this.props;
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
                categories={categories}
              />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  categories: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  categories: state.categories.categories
});

export default connect(
  mapStateToProps,
  { getCategories }
)(Navbar);
