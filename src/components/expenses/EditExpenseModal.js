import React, { Component } from "react";
import { getExpense } from "../../actions/expenseActions.js";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { getCategories } from "../../actions/expenseActions.js";

class EditExpenseModal extends Component {
  state = {
    id: "",
    expenseValue: " ",
    expenseCategory: "",
    expenseDate: new Date(),
    expenseComment: ""
  };
  clearForm = () => {
    this.setState({
      id: "",
      expenseValue: " ",
      expenseCategory: "",
      expenseDate: "",
      expenseComment: ""
    });
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleDateChange = date => {
    // console.log(date);
    this.setState({ expenseDate: date });
  };
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getCategories();
    this.props.getExpense(id);
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
    return (
      //   <p>test</p>
      <div>
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
            <label htmlFor="expenseDate" className="d-block">
              Date
            </label>
            {/* <DatePicker
              id="expenseDate"
              selected={this.state.expenseDate}
              onChange={this.handleDateChange}
              dateFormat="dd/MM/yyyy"
              className="datepicker-class"
            /> */}
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
            value="Add"
            onClick={this.saveExpense}
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
  { getExpense, getCategories }
)(EditExpenseModal);
