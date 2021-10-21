import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Header from '../shared/Header'
import GetPostComment from '../components/Detail/GetPostComment';

import { history } from '../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';

const Detail = (props) => {
  const dispatch = useDispatch();
  const post = useSelector(state =>state.post.list);
  console.log(post)
  const postingId = props.match.params.postingId;
  console.log(postingId)

  useEffect(()=>{
    dispatch(postActions.getPostMW(postingId));
  },[])

  return (
    <React.Fragment>
      <Header />
      <Wrap>
        <TitleWrap>
          <Title>{post.title}</Title>
          <User>{post.userName}</User>
          <Date> · {post.commentCnt}일 전</Date>
        </TitleWrap>
        <Content>{post.content}</Content>
        <Profile>
          <ProfileImage></ProfileImage>
          <UserName>{post.userName}</UserName>
        </Profile>
        <GetPostComment />
      </Wrap>
    </React.Fragment>
  );
};

const Wrap = styled.div`
  width: 768px;
  margin: 0 auto;
  border: 1px solid red;
  box-sizing: border-box;
`
const TitleWrap = styled.div`
  margin: 60px 0;
`
const Title = styled.h1`
  font-size: 44px;
`
const User = styled.span`
  font-weight: bold;
`
const Date = styled.span``
const Content = styled.div``
const Profile = styled.div`
  display: flex;
  justify-content: start;
  border-bottom: 1px solid #e6e6e6;
  box-sizing: border-box;
  padding-bottom: 30px;
  margin: 80px 0;
`
const ProfileImage = styled.image`
  display: block;
  width: 128px;
  height: 128px;
  border-radius: 50%;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
`
const UserName = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-left: 20px;

`


export default Detail;
