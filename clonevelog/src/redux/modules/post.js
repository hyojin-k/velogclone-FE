// import
import { createAction, handleAc, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../common/axios";

// action
const SET_POST = "SET_POST";
const SET_MY_POST = "SET_MY_POST";
const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";
const DELETE_POST = "DELETE_POST";

// action creators
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const setMyPost = createAction(SET_MY_POST, (my_post_list) => ({
  my_post_list,
}));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const updatePost = createAction(UPDATE_POST, (postingId, post) => ({
  postingId,
  post,
}));
const deletePost = createAction(DELETE_POST, (postingId) => ({ postingId }));

// initialState
const initialState = {
  list: [
    {
      commentCnt: 2,
      content: "내용임",
      dayBefore: "3분전",
      imageFile: null,
      postingId: 2,
      title: "제목임",
      userName: "hyo",
    },
  ],
};

// middleware
const getPostMW = (postingId) =>{
    return function (dispatch, getState, { history }) {
        console.log(postingId)
        apis
            .getPostAX()
            .then((res) =>{
                const post_list = res.data.data;
                console.log(post_list);
                if(postingId){
                    const post = post_list.filter(p =>postingId === postingId)[0];
                    dispatch(setPost(post));
                }else {
                    dispatch(setPost(post_list));
                }
                console.log('게시물 불러오기 완료')
                window.alert('게시물 불러오기 완료')
            })
            .catch((err) =>{
                console.log(err);
                window.alert('게시물 불러오기 실패')
            })
    }
}

// const getMyPostMW = (userName) =>{
//     return function (dispatch, getState, {history}){
//         console.log(userName)

//         apis
//             .getMyPostAX(userName)
//             .then(res =>{
//                 // console.log(res)
//                 // const my_post_list = res.data.myPostList
//                 // dispatch(setMyPost(my_post_list))
//             })
//             .catch((err)=>{
//                 console.log(err);
//             })
//     }
// }

const addPostMW = (post) => {
  return function (dispatch, getState, { history }) {
    console.log(post);

    apis
      .createPostAX(post)
      .then((res) => {
        dispatch(addPost(post));
        console.log(res.data.msg);
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
    [SET_MY_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.my_post_list;
        console.log(draft.list);
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.post);
        console.log(draft.list);
      }),
  },
  initialState
);

// export
const actionCreators = {
  setPost,
  addPost,
  updatePost,
  deletePost,
  getPostMW,
  // getMyPostMW,
  addPostMW,
};

export { actionCreators };
