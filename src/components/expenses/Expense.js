import React, { Component } from "react";
import { deleteExpense } from "../../actions/expenseActions.js";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Expense extends Component {
  deleteExpense = id => {
    // console.log(id);
    this.props.deleteExpense(id);
  };
  render() {
    // console.log(this.props.expense);
    let {
      id,
      expenseValue,
      expenseCategory,
      expenseDate,
      expenseComment
    } = this.props.expense;
    expenseDate = expenseDate.toString();
    expenseDate = expenseDate.substring(0, 10);
    // console.log(expenseDate);
    return (
      <tr>
        <td>{expenseCategory}</td>
        <td>{expenseDate}</td>
        <td>{expenseValue}</td>
        <td style={{ maxWidth: "200px" }}>{expenseComment}</td>
        <td style={{ padding: " 5px 0px" }}>
          <div>
            <Link to={`/expense/edit/${id}`}>
              <i
                className="fa fa-pencil btn btn-primary mx-1"
                aria-hidden="true"
              />
            </Link>
            <i
              className="fa fa-trash btn btn-danger mx-1"
              aria-hidden="true"
              onClick={this.deleteExpense.bind(this, id)}
            />
          </div>
        </td>
      </tr>
    );
  }
}

Expense.propTypes = {
  deleteExpense: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteExpense }
)(Expense);
