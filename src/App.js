import React from "react";

//components
import Header from "./components/layout/header/Header";
import Home from "./components/layout/home/Home";

//redux
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <Header />
        <Home />
      </Provider>
    </div>
  );
}

export default App;
