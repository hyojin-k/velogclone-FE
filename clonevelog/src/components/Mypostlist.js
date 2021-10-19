import React from 'react';
import styled from 'styled-components';

import Header from '../shared/Header';
import Mypost from './Mypost';

const Mypostlist = (props) =>{
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
    border: 1px solid green;
    box-sizing: border-box;
    max-width: 1024px;
    margin: 0 auto;
`

export default Mypostlist;