import React from "react";
import styled from "styled-components";

import { history } from "../redux/configureStore";
// import { useDispatch, useSelector } from "react-redux";

const Post = (props) => {
  const {
    postingId,
    filePath,
    title,
    content,
    dayBefore,
    commentCnt,
    userName,
    imageUrl,
  } = props;

  return (
    <>
      <Wrap>
        <ImageBtn
          onClick={() => {
            history.push(`/detail/${postingId}`);
          }}
        >
          {/* <Image src={filePath} /> */}
          <Image src={imageUrl} />
        </ImageBtn>
        <Description
          onClick={() => {
            history.push(`/detail/${postingId}`);
          }}
        >
          <TextWrap>
            <Title>{title}</Title>
            <Text>{content}</Text>
          </TextWrap>
          <Date>{dayBefore} · </Date>
          <Comment>{commentCnt}개의 댓글</Comment>
        </Description>
        <UserName>
          by <span style={{ fontWeight: "bold" }}>{userName}</span>
        </UserName>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 320px;
  height: 377px;
  margin: 20px 10px;
  box-shadow: 0 0 5px #dbdbdb;
  &:hover {
    margin-top: 2px;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 5px 10px #dbdbdb;
  }
`;
const ImageBtn = styled.button`
  display: block;
  width: 100%;
  border: none;
  box-sizing: border-box;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
`;
const Image = styled.img`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 167px;
`;
const Description = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 165px;
  padding: 0 16px;
`;
const TextWrap = styled.button`
  width: 100%;
  height: 118px;
  border: none;
  box-sizing: border-box;
  background-color: transparent;
  cursor: pointer;
  text-align: left;
  padding: 0;
`;
const Title = styled.h2`
  font-size: 16px;
  margin: -24px 0 8px 0;
`;
const Text = styled.p`
  font-size: 14px;
  line-height: 1.7;
  margin: 0;
`;
const Date = styled.span`
  font-size: 12px;
  color: rgb(134, 142, 150);
`;
const Comment = styled.span`
  font-size: 12px;
  color: rgb(134, 142, 150);
`;
const UserName = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 1px solid #e6e6e6;
  box-sizing: border-box;
  font-size: 14px;
  padding: 12px 16px;
`;

export default Post;
