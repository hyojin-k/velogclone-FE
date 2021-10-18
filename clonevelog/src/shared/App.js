import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

//pages
import Signin from "../pages/Signin";
import Main from "../pages/Main";
import Header from "./Header";

function App() {
  return (
    <React.Fragment>
      <Header />
      <ConnectedRouter history={history}>
        <Route path="/Login" exact component={Signin} />
        <Route path="/" exact component={Main} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
