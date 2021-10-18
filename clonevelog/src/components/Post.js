import React from "react";
import styled from "styled-components";

import { history } from "../redux/configureStore";

const Post = (props) => {
  return (
    <>
      <Wrap>
        <Image>
        </Image>
        <Description>
            <Text></Text>
            <Date>2일 전</Date>
            <Comment> 2개의 댓글</Comment>
          </Description>
          <UserName>by hyo</UserName>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  width: 320px;
  height: 377px;
  margin: 10px;
`;
const Image = styled.div`
  border: 1px solid red;
  box-sizing: border-box;
  width: 100%;
  height: 167px;
`;
const Description = styled.div`
  border: 1px solid blue;
  box-sizing: border-box;
  width: 100%;
  height: 165px;
`;
const Text = styled.div`
  border: 1px solid green;
  box-sizing: border-box;
  width: 100%;
  height: 118px;
`;
const Date = styled.span`

`;
const Comment = styled.span``;
const UserName = styled.div``;

export default Post;
