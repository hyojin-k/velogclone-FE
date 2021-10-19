import React from "react";
import '../App.css';
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

//pages
import Signin from "../pages/Signin";
import Main from "../pages/Main";
import Postadd from '../pages/Postadd';
import Mypostlist from '../components/Mypostlist';

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/Login" exact component={Signin} />
        <Route path="/" exact component={Main} />
        <Route path='/write' exact component={Postadd} />
        <Route path='/mypage' exact component={Mypostlist} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
