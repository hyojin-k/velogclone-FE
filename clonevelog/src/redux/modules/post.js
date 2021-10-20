// import
import { createAction, handleAc, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../common/axios';

// action
const SET_POST = 'SET_POST';
const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';
const DELETE_POST = 'DELETE_POST';

// action creators
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const updatePost = createAction(UPDATE_POST, (postingId, post) => ({
  postingId,
  post,
}));
const deletePost = createAction(DELETE_POST, (postingId) => ({ postingId }));

// initialState
const initialState = {
  list: [],
};

// middleware
<<<<<<< HEAD
const getPostAX = () => {
  return function (dispatch, getState, { history }) {
    apis
      .getPost()
      .then((res) => {
        const post_list = res.data;
        console.log(post_list);
        dispatch(setPost(post_list));
        console.log('등록 완료');
      })
      .catch((err) => {
        console.error(err);
      });
  };
};
=======
const getPostMW = () =>{
    return function (dispatch, getState, { history }) {
        apis
            .getPostAX()
            .then((res) =>{
                const post_list = res.data;
                console.log(post_list);
                dispatch(setPost(post_list));
                console.log('등록 완료')
            })
            .catch((err) =>{
                console.error(err);
            })
    }
}

const addPostMW = (post) =>{
    return function (dispatch, getState, { history }) {
        console.log(post)

        apis
            .createPostAX(post)
            .then((res) =>{
                dispatch(addPost(post));
                console.log(res);
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}
>>>>>>> 178bed8d3f20711542c6e5513436cbf40eab7026

const addPostAX = (_post) => {
  return function (dispatch, getState, { history }) {
    console.log(_post);
  };
};

// reducer
export default handleActions(
<<<<<<< HEAD
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
        console.log(draft.list);
      }),
    [ADD_POST]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// export
const actionCreators = {
  setPost,
  addPost,
  updatePost,
  deletePost,
  getPostAX,
  addPostAX,
};
=======
    {
        [SET_POST]: (state,action) => produce(state, (draft)=>{
            draft.list = action.payload.post_list;
            console.log(draft.list)
        }),
        [ADD_POST]: (state,action) => produce(state,(draft) =>{
            draft.list.push(action.payload.post)
            console.log(draft.list)
        })
    },
    initialState
)

// export
const actionCreators={
    setPost,
    addPost,
    updatePost,
    deletePost,
    getPostMW,
    addPostMW
}
>>>>>>> 178bed8d3f20711542c6e5513436cbf40eab7026

export { actionCreators };
