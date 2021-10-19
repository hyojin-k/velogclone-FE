// import
import { createAction, handleAc, handleActions } from 'redux-actions';
import{ produce } from 'immer';
import { apis } from '../../common/axios';

// action
const SET_POST = 'SET_POST';
const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';
const DELETE_POST = 'DELETE_POST';

// action creators
const setPost = createAction(SET_POST, (post_list) =>({post_list}));
const addPost = createAction(ADD_POST, (post) => ({post}));
const updatePost = createAction(UPDATE_POST,(postingId, post) => ({postingId, post}))
const deletePost = createAction(DELETE_POST, (postingId) =>({postingId}));

// initialState
const initialState = {
    list:[]
}


// middleware
const getPostAX = () =>{
    return function (dispatch, getState, { history }) {
        apis
            .getPost()
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

const addPostAX = (_post) =>{
    return function (dispatch, getState, { history }) {
        console.log(_post)
    }
}


// reducer
export default handleActions(
    {
        [SET_POST]: (state,action) => produce(state, (draft)=>{
            draft.list = action.payload.post_list;
            console.log(draft.list)
        }),
        [ADD_POST]: (state,action) => produce(state,(draft) =>{

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
    getPostAX,
    addPostAX
}

export {actionCreators};