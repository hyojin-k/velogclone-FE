import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";

import Header from "../shared/Header";
import GetPostComment from "../components/Detail/GetPostComment";

import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const Detail = (props) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.list);
  console.log('상세포스트', post);
  const postingId = props.match.params.postingId;
  console.log('파람즈 포스팅 아이디', postingId);

  const is_login = useSelector((state) => state.user.is_login);
  console.log('로그인 확인', is_login);
  const userName = useSelector((state) => state.post.list.userName);
  console.log('유저네임', userName);

  const detailPost = post.filter(
    (detailPost) => detailPost.postingId === Number(postingId))[0];
  console.log('디테일포스트', detailPost);

    const detailTitle = detailPost.title;
    const detailContent = detailPost.content;
    const detailUserName = detailPost.userName;
    const detailCommentCnt = detailPost.commentCnt;

  useEffect(() => {
    dispatch(postActions.getPostMW());
  }, []);

  const deletePost = (postingId, userName) =>{

  }

  return (
    <React.Fragment>
      <Wrap>
        <TitleWrap>
          <Title>{detailTitle}</Title>
          <Sub>
            <User>{detailUserName}</User>
            <Date> · {detailCommentCnt}일 전</Date>
            <Delete onClick={() => deletePost()}>삭제</Delete>
          </Sub>
        </TitleWrap>
        <Content>{detailContent}</Content>
        <Profile>
          <ProfileImage></ProfileImage>
          <UserName>{detailUserName}</UserName>
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
`;
const TitleWrap = styled.div`
  margin: 60px 0;
`;
const Title = styled.h1`
  font-size: 44px;
`;
const Sub = styled.div`
  position: relative;
`
const User = styled.span`
  font-weight: bold;
`;
const Date = styled.span``;
const Delete = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  border: none;
  background-color: transparent;
  color: #444;
  font-size: 16px;
  cursor: pointer;
`
const Content = styled.div``;
const Profile = styled.div`
  display: flex;
  justify-content: start;
  border-bottom: 1px solid #e6e6e6;
  box-sizing: border-box;
  padding-bottom: 30px;
  margin: 80px 0;
`;
const ProfileImage = styled.image`
  display: block;
  width: 128px;
  height: 128px;
  border-radius: 50%;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
`;
const UserName = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-left: 20px;
`;

export default Detail;
