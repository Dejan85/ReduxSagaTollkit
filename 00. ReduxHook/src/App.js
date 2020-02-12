import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers/rootReducer";
import Xad from "./Xad";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Xad />
      </div>
    </Provider>
  );
}

export default App;
