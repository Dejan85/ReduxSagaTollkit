import React from "react";

// components
import Basic from "./example/Basic";
import FetchExample from "./example/FetchExample";
import { interator } from "./example/InfiniteMaker";
import { anotherGeneratorInterator } from "./example/AnotherGenerator";

function App() {
  return (
    <div className="App">
      <Basic />
      <FetchExample />
    </div>
  );
}

export default App;
