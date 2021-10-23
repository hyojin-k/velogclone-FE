import React, { useEffect } from "react";
import "../App.css";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

//pages
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import Postadd from "../pages/Postadd";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.LoginCheckDB());
  }, []);

  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Main} />
        <Route path="/write" exact component={Postadd} />
        <Route path="/detail/:postingId" exact component={Detail} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
