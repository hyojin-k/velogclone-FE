import React from "react";
import styled from "styled-components";

import { history } from "../redux/configureStore";
// import { useDispatch, useSelector } from "react-redux";


const Post = (props) => {
  const {
    postingId, 
    thumNail,
    title,
    content,
    dayBefore,
    commentCnt,
    userName
  } = props;  
  return (
    <>
      <Wrap>
        <Image></Image>
        <Description onClick={()=>{history.push('detail')}}>
          <TextWrap>
            <Title>{title}</Title>
            <Text>{content}</Text>
          </TextWrap>
          <Date>2일 전 ·</Date>
          <Comment> 2개의 댓글</Comment>
        </Description>
        <UserName>by <span style={{fontWeight: 'bold'}}>hyo</span></UserName>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  box-sizing: border-box;
  width: 320px;
  height: 377px;
  margin: 10px;
  box-shadow: 0 0 5px #dbdbdb;
`;
const Image = styled.div`
  border-bottom: 1px solid red;
  box-sizing: border-box;
  width: 100%;
  height: 167px;
`;
const Description = styled.div`
  border-bottom: 1px solid #e6e6e6;
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
`
const Title = styled.h2`
  font-size: 16px;
  margin: -24px 0 8px 0;
`;
const Text = styled.p`
  font-size: 14px;
  line-height: 1.7;
  margin:0;
`;
const Date = styled.span`
  font-size: 12px;
  color:rgb(134, 142, 150);
`;
const Comment = styled.span`
  font-size: 12px;
  color:rgb(134, 142, 150);
`;
const UserName = styled.div`
  font-size: 14px;
  padding: 12px 0 0 16px;
  /* border-top: 1px solid #dbdbdb; */
`;

export default Post;
