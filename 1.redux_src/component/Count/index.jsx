import React, { Component } from "react";
import store from "../../redux/store";
import {
  IncrementAction,
  decrementAction,
  resetNumberAction,
} from "../../redux/action";

export default class Count extends Component {
  Increment = () => {
    const numberSelect = this.select.value;
    store.dispatch(IncrementAction(numberSelect * 1));
  };
  decrement = () => {
    const numberSelect = this.select.value;
    store.dispatch(decrementAction(numberSelect * 1));
  };
  resetNUmber = () => {
    store.dispatch(resetNumberAction(0));
  };
  componentDidMount() {
    this.unSubscribe = store.subscribe(() => {
      this.setState({});
    });
  }
  componentWillUnmount() {
    this.unSubscribe();
  }
  render() {
    return (
      <div>
        <h4>当前求和的数字是:{store.getState()}</h4>
        <select ref={(c) => (this.select = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.Increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.resetNUmber}>重置</button>
      </div>
    );
  }
}
