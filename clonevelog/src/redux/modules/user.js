import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import {
  setCookie,
  getCookie,
  delteCookie,
  deleteCookie,
} from "../../shared/Cookie";

import { apis } from "../../common/axios";

//actions
const SET_USER = "SET_USER";
const GET_USER = "GET_USER";
const LOG_OUT = "LOG_OUT";

//action creators
const setUser = createAction(SET_USER, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, () => ({}));

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
  return (dispatch, getState, { history }) => {
    apis
      .signin(userId, password)
      .then((res) => {
        console.log(res.data);
        const token = res.data.token;
        if (token === null) {
          window.alert("비밀번호를 잘못 입력하였습니다.");
          history.push("/");
        } else {
          setCookie("is_login", res.data.token);
          localStorage.setItem("userId", userId);
          dispatch(setUser({ userId: userId }));
          history.push("/");
          window.alert("로그인되었습니다.");
        }
      })
      .catch((err) => {
        console.error(err.response.data);
        window.alert("로그인오류!!!");
      });
  };
};

const LogOutDB = () => {
  return function (dispatch, getState, { history }) {
    deleteCookie("is_login");
    localStorage.removeItem("userId");
    dispatch(logOut());
    window.alert("로그아웃 했습니다.");
    history.push("/");
  };
};

const LoginCheckDB = () => {
  return function (dispatch, getState, { history }) {
    const tokenCheck = document.cookie;
    console.log(tokenCheck);
    if (tokenCheck) {
      const userId = localStorage.getItem("userId");
      dispatch(setUser({ userId: userId }));
    } else {
      dispatch(logOut());
    }
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),

    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
  },
  initialState
);

const actionCreators = {
  SignUpDB,
  setUser,
  LoginDB,
  getUser,
  LogOutDB,
  logOut,
  LoginCheckDB,
};

export { actionCreators };
