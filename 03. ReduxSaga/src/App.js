import React from "react";

// components
import Page from "./components/Page";

// redux
import reducer from "./redux/store";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

//saga
import createSagaMiddleware from "redux-saga";
import { watchAgeUp } from "./sagas/saga";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchAgeUp);

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
