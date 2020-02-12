import React from "react";

// components
import Page from "./components/Page";

// redux
import reducer from "./redux/store";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Page />
      </div>
    </Provider>
  );
}

export default App;
