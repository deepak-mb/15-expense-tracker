import React, { Component } from "react";

class Expense extends Component {
  render() {
    // console.log(this.props.expense);
    let {
      expenseValue,
      expenseCategory,
      expenseDate,
      expenseComment
    } = this.props.expense;
    expenseDate = expenseDate.toString();
    expenseDate = expenseDate.substring(0, 15);
    // console.log(expenseDate);
    return (
      <tr>
        <td>{expenseCategory}</td>
        <td>{expenseDate}</td>
        <td>{expenseValue}</td>
        <td style={{ maxWidth: "200px" }}>{expenseComment}</td>
        <td style={{ padding: " 5px 0px" }}>
          <div>
            <i
              className="fa fa-pencil btn btn-primary mx-1"
              aria-hidden="true"
            />
            <i className="fa fa-trash btn btn-danger mx-1" aria-hidden="true" />
          </div>
        </td>
      </tr>
    );
  }
}

export default Expense;
