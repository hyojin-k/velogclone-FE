// import
import { createAction, handleAc, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../common/axios";

// action
const SET_POST = "SET_POST";
const DETAIL_POST = 'DETAIL_POST';
const ADD_POST = "ADD_POST";

// action creators
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const detailPost = createAction(DETAIL_POST, (detail) => ({detail}));
const addPost = createAction(ADD_POST, (post) => ({ post }));

// initialState
const initialState = {
  list: [
    {
      commentCnt: 2,
      content: "내용임",
      dayBefore: "3분전",
      filePath: null,
      postingId: 2,
      title: "제목임",
      userName: "hyo",
    },
  ],
};

// middleware
const getPostMW = (postingId) => {
  return function (dispatch, getState, { history }) {
    console.log(postingId);
    apis
      .getPostAX()
      .then((res) => {
        const post_list = res.data.data;
        console.log(post_list);
        if (postingId) {
          const post = post_list.filter((p) => p.postingId === postingId[0]);
          console.log(post);
          dispatch(setPost(post));
        } else {
          dispatch(setPost(post_list));
        }
        console.log("게시물 불러오기 완료");
      })
      .catch((err) => {
        console.log(err);
        console.log('게시물 불러오기 실패')
        window.alert("게시물 불러오기 실패");
      });
  };
};


const detailPostMW = (postingId) =>{
  return function(dispatch, getState, {history}) {
    console.log('디테일 페이지', postingId)
  
    apis
      .detailPostAX(postingId)
      .then((res) =>{
        const post = res.data;
        console.log(post)

        dispatch(detailPost(post))
      })
      .catch(err =>{
        console.log(err)
      })
  }
}

const addPostMW = (post) => {
  return function (dispatch, getState, { history }) {
    apis
      .createPostAX(post)
      .then((res) => {
        console.log(res.data.msg);
        dispatch(addPost(post));
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};


// reducer
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
        console.log(draft.list);
      }),
    [DETAIL_POST]: (state,action) =>
      produce(state, (draft) => {
      draft.detail = action.payload.detail;
    }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.post);
        console.log(draft.list);
      })
  },
  initialState
);

// export
const actionCreators = {
  setPost,
  addPost,
  getPostMW,
  detailPostMW,
  addPostMW,
};

export { actionCreators };
