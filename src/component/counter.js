import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../action/add";

class Counter extends React.Component {
  increment = () => {
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };

  reset = () => {
    this.props.reset();
  };
  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
        <button className="reset" onClick={this.reset}>
          re
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}
// 在这个对象中, 属性名会成为 prop 的 names,
// 属性值应该是 action 生成器函数.
// 它们跟 `dispatch` 绑定起来.
const mapDispatchToProps = {
  increment,
  decrement,
  reset
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
