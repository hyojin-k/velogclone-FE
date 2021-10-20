import React, { useEffect } from "react";
import "../App.css";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

//pages
import Signin from "../pages/Signin";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import Postadd from "../pages/Postadd";
import Mypostlist from "../components/Mypostlist";
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
        <Route path="/detail" exact component={Detail} />
        <Route path="/Login" exact component={Signin} />
        <Route path="/" exact component={Main} />
        <Route path="/write" exact component={Postadd} />
        <Route path="/mypage" exact component={Mypostlist} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
