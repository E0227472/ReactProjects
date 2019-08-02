import React, { Component } from "react";
import "./counters.css";
import Counter from "../../StatelessComponents/counter";

class counters extends Component {
  render() {
    return (
      <React.Fragment>
        <ul>
          <span class="badge badge-primary">{this.props.count}</span>
          <Counter
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete = {this.props.onDelete}
            count = {this.props.count}
          />
        </ul>
      </React.Fragment>
    );
  }
}

export default counters;
