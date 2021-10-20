import React from 'react';
import styled from 'styled-components';

import Header from '../shared/Header'
import GetTitle from '../components/Detail/GetTitle';
import GetWrite from '../components/Detail/GetWrite';
import MyProfile from '../components/Detail/MyProfile';
import GetPostComment from '../components/Detail/GetPostComment';

const Detail = (props) => {
  return (
    <All>
      <Header />
      <GetTitle />
      <GetWrite />
      <MyProfile />
      <GetPostComment />
    </All>
  );
};

const All = styled.div`
margin-top: 2rem;
  box-sizing : inherit;
  height: 100%;
  overflow-y: initial;
  margin: 0px;
  padding: 0px;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: rgb(33, 37, 41);
  box-sizing: border-box;
  margin-left: auto;
    margin-right: auto;
    padding-bottom: 4rem;
  width: 768px
`;

export default Detail;
