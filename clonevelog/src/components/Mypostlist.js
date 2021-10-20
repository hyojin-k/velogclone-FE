import React, {useEffect} from 'react';
import styled from 'styled-components';

import Header from '../shared/Header';
import Mypost from './Mypost';

import {useDispatch, useSelector} from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';


const Mypostlist = (props) =>{
    const dispatch = useDispatch();

    const my_post_list = useSelector(state => state);
    console.log(my_post_list);

    useEffect(()=>{
        // dispatch(postActions.getMyPostMW(userName))
    })

    return (
        <React.Fragment>
            <Header />
            <UserWrap>
                HYOJIN
            </UserWrap>
            <PostList>
                <Mypost />
                <Mypost />
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