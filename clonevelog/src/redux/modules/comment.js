import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

const ADD_COMMENT = 'ADD_COMMENT';
const GET_COMMENT = 'GET_COMMENT';

const addComment = createAction(ADD_COMMENT, (postcomment) => ({
  postcomment,
}));
const getComment = createAction(GET_COMMENT, (getcomment) => ({ getcomment }));

const initialState = {
  list: [
    {
      postingId: 'suenghwan',
      title: '누구인가? 누가 기침소리를 내었어!',
      content: '4달라',
      filePath: '/images/basic.jpg',
      modifiedAt: '2021-10-19 00:00:00',
      commentList: '와 최고의 명작이죠',
    },
  ],
};

//미들웨어
// const getCommentDB = (id) => {
// 	return function (dispatch, getState, {history}) {
// 		// 로컬스토리지에서 토큰 받아 오기
// 		const token = localStorage.getItem("token");
// 		const headers = {

// 		}

// 	}
// }

export default handleActions(
  {
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.postcomment;
      }),
    [GET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.getComment;
      }),
  },
  initialState
);

const actionCreators = {
  addComment,
  getComment,
};

export { actionCreators };
