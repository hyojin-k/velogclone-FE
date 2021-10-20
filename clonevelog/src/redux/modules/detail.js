import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
// import instance from '../../common/axios';
import { apis } from "../../common/axios";

const GET_DETAIL = "GET_DETAIL";

const getDetail = createAction(GET_DETAIL, (deatail_list) => ({
  deatail_list,
}));

const initialState = {
  list: [
    {
      createdAt: "2021-10-19 21:16:35",
      modifiedAt: "2021-10-19 21:16:35",
      postingId: 4,
      userName: "bbb",
      title: "제목2",
      content: "내용",
      contentTag: "테스트",
      imageFile: "/images/basic.jpg",
    },
  ],
};

//미들웨어
const detailDB = () => {
  return function (dispatch, getState, { history }) {
    apis
      .get(`http://54.180.148.132/api/posting/3`)
      .then((res) => {
        console.log("then getcomment 진입 되었나?", res.data.result);
        dispatch(getDetail(res.data.result));
      })
      .catch((error) => {
        console.error(error.response.data.message);
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
};

export { actionCreators };
