import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../common/axios';
import axios from 'axios';

const GET_DETAIL = 'GET_DETAIL';

const getDetail = createAction(GET_DETAIL, (deatail_list) => ({
  deatail_list,
}));

const initialState = {
  list: [
    {
      createdAt: '2021-10-19 21:16:35',
      modifiedAt: '2021-10-19 21:16:35',
      postingId: 4,
      userName: 'bbb',
      title: '제목2',
      content: '내용',
      contentTag: '테스트',
      imageFile: '/images/basic.jpg',
    },
  ],
};

//미들웨어
const detailDB = () => {
  return function (dispatch, getState, { history }) {
    apis
      .getPostAX()
      .then((res) => {
        const detail_list = res.data;
        console.log('거 detail_list 들어오는가?', detail_list);
        dispatch(getDetail(detail_list));
        console.log('리덕스 저장 완료');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [GET_DETAIL]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.deatail_list;
      }),
  },
  initialState
);

const actionCreators = {
  getDetail,
  detailDB,
};

export { actionCreators };
