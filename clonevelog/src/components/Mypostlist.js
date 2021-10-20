import React, {useEffect} from 'react';
import styled from 'styled-components';

import Header from '../shared/Header';
import Mypost from './Mypost';

import {useDispatch, useSelector} from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';


const Mypostlist = (props) =>{
    const dispatch = useDispatch();
    const userName = props.match.params.userName;

    const myPostList = useSelector(state => state.post.list);
    console.log(myPostList);

    // useEffect(()=>{
    //     dispatch(postActions.getMyPostMW(userName))
    // },[])

    if(!myPostList) {
        return;
    }
    
    return (
        <React.Fragment>
            <Header />
            <UserWrap>
                {userName}
            </UserWrap>
            <PostList>
                {/* <Mypost />
                <Mypost /> */}
                {myPostList.map((p, idx) =>{
                    return <Mypost {...p} key={idx} />;
                })}
            </PostList>
        </React.Fragment>
    )
}

const UserWrap = styled.div`
    max-width: 1024px;
    font-size:20px;
    font-weight: bold;
    border-bottom: 1px solid #dbdbdb;
    padding: 60px 0;
    margin: 60px auto;
`
const PostList = styled.div`
    max-width: 1024px;
    margin: 0 auto;
`

export default Mypostlist;