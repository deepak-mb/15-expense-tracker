import React, { Component } from "react";
import { getExpense } from "../../actions/expenseActions.js";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { getCategories, editExpense } from "../../actions/expenseActions.js";

class EditExpenseModal extends Component {
  state = {
    id: "",
    expenseValue: " ",
    expenseCategory: "",
    expenseDate: new Date(),
    expenseComment: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleDateChange = date => {
    // console.log(date);
    this.setState({ expenseDate: date });
  };
  editExpense = () => {
    const {
      id,
      expenseValue,
      expenseCategory,
      expenseDate,
      expenseComment
    } = this.state;
    let expense = {
      id,
      expenseValue,
      expenseCategory,
      expenseDate,
      expenseComment
    };
    this.props.editExpense(expense);
    this.props.history.push("/");
  };
  componentDidMount() {
    let id = this.props.match.params.id;
    // console.log(id);
    this.props.getCategories();
    this.props.getExpense(id);
    console.clear();
  }
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps.expense);
    const {
      id,
      expenseValue,
      expenseCategory,
      expenseDate,
      expenseComment
    } = nextProps.expense;
    this.setState({
      id,
      expenseValue,
      expenseCategory,
      expenseDate,
      expenseComment
    });
    // console.clear();
  }
  render() {
    const {
      id,
      expenseValue,
      expenseCategory,
      expenseDate,
      expenseComment
    } = this.state;
    const { categories } = this.props;
    // console.log(id, expenseValue, expenseCategory, expenseDate, expenseComment);
    return (
      <div className="my-3">
        <form>
          <div className="form-group">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  &#8377;
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Amount"
                aria-label="Amount"
                aria-describedby="basic-addon1"
                name="expenseValue"
                value={expenseValue}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Category</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              onChange={this.onChange}
              name="expenseCategory"
            >
              <option defaultValue>Select a category</option>
              {categories.map(category => (
                <option key={category.id}>{category.category}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="expenseComment">Comment</label>
            <textarea
              className="form-control"
              id="expenseComment"
              rows="1"
              value={expenseComment}
              name="expenseComment"
              onChange={this.onChange}
            />
          </div>
          <input
            type="button"
            value="Edit"
            onClick={this.editExpense}
            className="btn btn-success"
          />
          <input
            type="button"
            value="Clear"
            onClick={this.clearForm}
            className="btn btn-primary"
          />
        </form>
      </div>
    );
  }
}

EditExpenseModal.propTypes = {
  //   expense: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  expense: state.expenses.expense,
  categories: state.categories.categories
});

export default connect(
  mapStateToProps,
  { getExpense, getCategories, editExpense }
)(EditExpenseModal);
