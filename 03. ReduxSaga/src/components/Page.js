import React from "react";
import { connect } from "react-redux";

const Page = props => {
  const { age, onAgeUp, onAgeDown } = props;
  return (
    <div className="App">
      <div className="Age-label">
        your age: <span>{age}</span>
      </div>
      <button onClick={() => onAgeUp()}>Age UP</button>
      <button onClick={() => onAgeDown()}>Age Down</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    age: state.age
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", payload: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", payload: 1 })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
