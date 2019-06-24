import React, { Component } from "react";
import { getExpenses, getCategories } from "../../actions/expenseActions.js";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Expense from "./Expense.js";

class Expenses extends Component {
  componentDidMount() {
    this.props.getExpenses();
  }
  render() {
    const { expenses } = this.props;
    // console.log(this.props.expenses);
    return (
      <div>
        <p className="display-4 text-danger">Expenses List</p>
        {expenses.length === 0 ? (
          <p>Yaaaaay! You have no expenses.</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Category</th>
                  <th scope="col">Date</th>
                  <th scope="col">Value</th>
                  <th scope="col">Comment</th>
                  <th scope="col">Options</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map(expense => (
                  <Expense key={expense.id} expense={expense} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

Expenses.propTypes = {
  expenses: PropTypes.array.isRequired,
  getExpenses: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  expenses: state.expenses.expenses
});

export default connect(
  mapStateToProps,
  { getExpenses, getCategories }
)(Expenses);
