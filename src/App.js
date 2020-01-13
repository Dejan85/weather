import React from "react";

//components
import Header from "./components/layout/header/Header";
import Home from "./components/layout/home/Home";

//redux
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <Home />
      </div>
    </Provider>
  );
}

export default App;
