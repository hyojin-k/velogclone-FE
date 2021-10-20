import React from 'react';
import styled from 'styled-components';

import Header from '../shared/Header'
import GetPostComment from '../components/Detail/GetPostComment';

const Detail = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Wrap>
        <TitleWrap>
          <Title>타이틀</Title>
          <User>유저네임</User>
          <Date> · 3일 전</Date>
        </TitleWrap>
        <Content>내용</Content>
        <Profile>
          <ProfileImage></ProfileImage>
          <UserName>hyo</UserName>
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
