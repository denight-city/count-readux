import React, { Component } from "react";
import { Increment, decrement, resetNumber } from "../../redux/action";
import { connect } from "react-redux";

class Count extends Component {
  Increment = () => {
    const numberSelect = this.select.value * 1;
    this.props.Increment(numberSelect);
  };
  decrement = () => {
    const numberSelect = this.select.value * 1;
    this.props.decrement(numberSelect);
  };
  resetNumber = () => {
    const numberSelect = this.select.value * 0;
    this.props.resetNumber(numberSelect);
  };
  render() {
    return (
      <div>
        <h4>当前求和的数字是:{this.props.count}</h4>
        <select ref={(c) => (this.select = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.Increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.resetNumber}>重置</button>
      </div>
    );
  }
}
export default connect((state) => ({ count: state }), {
  Increment,
  decrement,
  resetNumber,
})(Count);
