import React, { useEffect, useState } from "react";
import styled from "styled-components";

import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";

import Header from "../shared/Header";
import Comment from "../components/Comment";
import velog from "../static/velog.png";

import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as commentActions } from "../redux/modules/comment";

const Detail = (props) => {
  const dispatch = useDispatch();
  const comment_list = useSelector((state) => state.post.detail?.commentList);
  console.log(comment_list);
  const [comment, setComment] = React.useState();
  const post = useSelector((state) => state.post.list);
  const detail = useSelector((state) => state.post.detail);
  const postingId = Number(props.match.params.postingId);
  const is_login = useSelector((state) => state.user.is_login);
  const userName = useSelector((state) => state.post.list.userName);

  const detailPost = post.filter(
    (detailPost) => detailPost.postingId === Number(postingId)
  )[0];
  const title = detail?.title;
  const content = detail?.content;
  const dayBefore = detail?.dayBefore;
  const imageUrl = detail?.imageUrl;
  const filePath = detail?.filePath;

  const detailUserName = detailPost?.userName;
  const detailCommentCnt = detailPost?.commentCnt;

  const onChangeComment = (e) => {
    setComment(e.target.value);
    console.log("코멘트작성");
  };
  const onClickComment = () => {
    console.log(typeof postingId);
    console.log(postingId, comment);
    dispatch(commentActions.addCommentDB(comment, postingId));
    console.log("작성!!");
    // history.replace("/");
  };

  useEffect(() => {
    dispatch(postActions.detailPostMW(postingId));
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Wrap>
        <TitleWrap>
          <Title>{title}</Title>
          <Sub>
            <User>{detailUserName}</User>
            <Date> · {dayBefore}</Date>
          </Sub>
        </TitleWrap>
        <Content>
          {/* <Viewer initialValue={content} /> */}
          <div>{content}</div>
          <img src={imageUrl} style={{ width: "100%" }} />
        </Content>
        <Profile>
          <ProfileImage src={velog}></ProfileImage>
          <UserName>{detailUserName}</UserName>
        </Profile>
        <CommentWrap>
          <CommentWrite>
            <CommentCnt>{detailCommentCnt}개의 댓글</CommentCnt>
            <CommentInput
              placeholder="댓글을 작성하세요"
              onChange={onChangeComment}
            ></CommentInput>
            <CommentBtn onClick={onClickComment}>댓글작성</CommentBtn>
          </CommentWrite>
          {comment_list?.map((c, idx) => {
            return <Comment key={idx} {...c} />;
          })}
        </CommentWrap>
      </Wrap>
    </React.Fragment>
  );
};

const Wrap = styled.div`
  width: 768px;
  margin: 0 auto;
`;
const TitleWrap = styled.div`
  margin: 60px 0;
`;
const Title = styled.h1`
  font-size: 44px;
`;
const Sub = styled.div`
  position: relative;
`;
const Content = styled.div``;
const User = styled.span`
  font-weight: bold;
`;
const Date = styled.span``;
const Profile = styled.div`
  display: flex;
  justify-content: start;
  border-bottom: 1px solid #e6e6e6;
  box-sizing: border-box;
  padding-bottom: 30px;
  margin: 80px 0;
`;
const ProfileImage = styled.img`
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
  margin: 40px 0 0 20px;
`;

const CommentWrap = styled.div`
  box-sizing: border-box;
`;
const CommentWrite = styled.div`
  box-sizing: border-box;
`;
const CommentCnt = styled.p`
  font-weight: bold;
`;
const CommentInput = styled.textarea`
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
  width: 100%;
  height: 98px;
  padding: 16px;
  margin-bottom: 24px;
  resize: none;
  font-size: 16px;
  &::-webkit-scrollbar {
    display: none;
  }
  &::placeholder {
    color: #888;
  }
`;
const CommentBtn = styled.button`
  border: none;
  color: #fff;
  font-weight: bold;
  background-color: rgb(18, 184, 134);
  font-size: 16px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: rgb(18, 194, 124);
  }
`;
const CommentList = styled.div`
  box-sizing: border-box;
`;

export default Detail;
