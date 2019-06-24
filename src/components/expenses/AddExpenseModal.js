import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import uuid from "uuid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class AddExpenseModal extends Component {
  state = {
    expenseValue: " ",
    expenseCategory: "",
    expenseDate: new Date(),
    expenseComment: ""
  };
  clearForm = () => {
    this.setState({
      expenseValue: " ",
      expenseCategory: "",
      expenseDate: "",
      expenseComment: ""
    });
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  saveExpense = () => {};
  handleDateChange = date => {
    console.log(date);
    this.setState({ expenseDate: date });
  };
  render() {
    const { handleClose, show } = this.props;
    // console.log(this.state);
    const {
      expenseValue,
      expenseCategory,
      expenseDate,
      expenseComment
    } = this.state;
    return (
      <div>
        <Modal
          show={show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
                  <option>Food</option>
                  <option>Travel</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="expenseDate" className="d-block">
                  Date
                </label>
                <DatePicker
                  id="expenseDate"
                  selected={this.state.expenseDate}
                  onChange={this.handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  className="datepicker-class"
                />
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
            </form>
          </Modal.Body>
          <Modal.Footer>
            <input
              type="button"
              value="Save"
              onClick={this.saveExpense}
              className="btn btn-success"
            />
            <input
              type="button"
              value="Clear"
              onClick={this.clearForm}
              className="btn btn-primary"
            />
            <input
              type="button"
              value="Close"
              onClick={handleClose}
              className="btn btn-danger"
            />
          </Modal.Footer>
        </Modal>
        {/* <p>test</p> */}
      </div>
    );
  }
}

export default AddExpenseModal;