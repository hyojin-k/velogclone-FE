import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import apis from 'axios';
import axios from 'axios';

const ADD_COMMENT = 'ADD_COMMENT';
const GET_COMMENT = 'GET_COMMENT';

const addComment = createAction(ADD_COMMENT, (posts) => ({
  posts,
}));
const getComment = createAction(GET_COMMENT, (gets) => ({
  gets,
}));

const initialState = {
  list: [
    {
      createdAt: '2021-10-19 21:16:37',
      modifiedAt: '2021-10-19 21:16:37',
      id: 13,
      userName: 'bbb',
      comment: '내용1',
      postingId: 3,
    },
  ],
};

//미들웨어
const addCommentDB = (id, comment) => {
  return function (dispatch, getState, { history }) {
    apis
      .post(`http://54.180.148.132/api/comment/3`, { comment })
      .then((res) => {
        console.log('then getcomment 진입 되었나?', res.data.result);
        dispatch(addComment(res.data.result));
      })
      .catch((error) => {
        console.error(error.response.data.message);
      });
  };
};

// const addComment = (id, data) => {
//   return function (dispatch, getState, { history }) {
//     const token = localStorage.getItem('token');
//     const header = {
//       //  'Content-Type': 'multipart/form-data',
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*',
//       authorization: `Bearer ${token}`,
//     };

//     console.log('addComment axios 전', data);
//     axios
//       .post(
//         `http://54.180.148.132/api/posting/${id}`,
//         { comments: data },
//         { headers: headers }
//       )
//       .then((res) => {
//         console.log('Addcomment then 진입 성공!', res.data.result);
//         dispatch();
//       });
//   };
// };

export default handleActions(
  {
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.posts;
      }),
    [GET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.gets;
      }),
  },
  initialState
);

const actionCreators = {
  addComment,
  getComment,
  addCommentDB,
};

export { actionCreators };
