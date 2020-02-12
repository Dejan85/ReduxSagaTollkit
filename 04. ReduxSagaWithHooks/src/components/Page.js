import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { watchAgeUp } from "../sagas/saga";

const Page = props => {
  const dispatch = useDispatch();
  const { age } = useSelector(state => state);
  const { onAgeUp, onAgeDown } = props;

  return (
    <div className="App">
      <div className="Age-label">
        your age: <span>{age}</span>
      </div>
      <button onClick={() => dispatch({ type: "AGE_UP_ASYNC", payload: 1 })}>
        Age UP
      </button>
      <button onClick={() => dispatch({ type: "AGE_DOWN", payload: 1 })}>
        Age Down
      </button>
    </div>
  );
};

export default Page;
