import React, { Component } from "react";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

class Counter extends Component {
  // state = {
  //   counter: 0
  // };

  // counterChangedHandler = (action, value) => {
  //   switch (action) {
  //     case "inc":
  //       this.setState(prevState => {
  //         return { counter: prevState.counter + 1 };
  //       });
  //       break;
  //     case "dec":
  //       this.setState(prevState => {
  //         return { counter: prevState.counter - 1 };
  //       });
  //       break;
  //     case "add":
  //       this.setState(prevState => {
  //         return { counter: prevState.counter + value };
  //       });
  //       break;
  //     case "sub":
  //       this.setState(prevState => {
  //         return { counter: prevState.counter - value };
  //       });
  //       break;
  //   }
  // };

  render() {
    
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl
          label="Add 5"
          clicked={this.props.onIncrementCounterFive}
        />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onDecrementCounterFive}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
     
        <ul>
        {this.props.storeResults.map(strResult => {
          return (
          <li key ={strResult.id} onClick = {() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
          )
        })}
    
        </ul>
      
      </div>
    );
  }
}

// getting the state from the global state store object and not internal state.
// injected into current component. Hence, referred to as props when used in the component
const mapStateToProps = state => {
  return {
    // mapping the properties in the global state to the internal properties to component
    // Redux allows one level of nesting 
    ctr: state.ctr.counter,
    storeResults: state.res.results
  };
};

// similar to setState in internal component, to change the state
// the dispatch method is to specify the action name
const mapDispatchToProps = dispatch => {
  return {
    // type property is fixed, specifies the action type 
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    // other properties can be passed with any specified name 
    onIncrementCounterFive: () => dispatch({ type: actionTypes.INC, value: 5 }),
    onDecrementCounterFive: () => dispatch({ type: actionTypes.DEC, value: 5 }),
    onStoreResult: (counter) => dispatch({ type: actionTypes.STORE_RESULT, counter: counter}),
    onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, id: id })
  };
};
// connect => subscription method that is obtained from react-redux.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
