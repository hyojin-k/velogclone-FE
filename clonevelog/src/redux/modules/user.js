import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setCookie, getCookie, delteCookie } from "../../shared/Cookie";

import { apis } from "../../common/axios";

//actions
const SET_USER = "SET_USER";
const LOG_IN = "LOG_IN";

//action creators
const setUser = createAction(SET_USER, (user) => ({ user }));
const logIn = createAction(LOG_IN, (user) => ({ user }));
//initialState
const initialState = {
  user: null,
  is_login: false,
};

//회원가입 요청
const SignUpDB = (userId, password, userName) => {
  return function (dispatch, getState, { history }) {
    apis
      .signup(userId, password, userName)
      .then((res) => {
        window.alert("회원가입을 성공하였습니다.");
        history.push("/");
      })
      .catch((err) => {
        console.error(err.response.data);
        window.alert("오류가 발생했습니다!!!!!!");
      });
  };
};

const LoginDB = (userId, password) => {
  return function (dispatch, getState, { history }) {
    apis
      .signin(userId, password)
      .then((res) => {
        console.log(res);
        dispatch(
          setUser({
            userId: userId,
            password: password,
          })
        );
        setCookie("token", res.data.token);
        history.push("/");
      })
      .catch((err) => {
        console.error(err.response.data);
        window.alert("로그인오류!!!");
      });
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce((state, draft) => {
        draft.user = action.payload.user;
        draft.is_login = action.payload.is_login;
        console.log(action.payload);
      }),
    [LOG_IN]: (state, action) =>
      produce((state, draft) => {
        draft.user = action.payload.user;
      }),
  },
  initialState
);

const actionCreators = {
  SignUpDB,
  LoginDB,
};

export { actionCreators };
