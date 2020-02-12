import React from "react";

const Basic = () => {
  function* foo() {
    let x = yield "Please give me a value for x";
    console.log(x);

    let y = yield "Please give me a value for y";
    console.log(y);

    let z = yield "Please give me a value for z";
    console.log(z);

    return x + y + z;
  }

  let generatingFoo = foo();

  // console.log(generatingFoo.next());
  // console.log(generatingFoo.next(8));
  // console.log(generatingFoo.next(17));
  // console.log(generatingFoo.next(25));

  return <div>Basic generators</div>;
};

export default Basic;
