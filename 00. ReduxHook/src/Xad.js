import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Xad = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      {/* <h1>Counetr: {counter}</h1> */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
    </div>
  );
};

export default Xad;
