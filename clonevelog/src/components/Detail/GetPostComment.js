import React, { useState } from 'react';

import Text from '../../elements/Text';

import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { actionCreators as commentAction } from '../../redux/modules/comment';
import { useParams } from 'react-router';

const GetPostComment = (props) => {
  const id = useParams().id;
  console.log(id);

  const dispatch = useDispatch();
  // // usestate
  const [comment, setComment] = React.useState('');
  console.log(comment);
  // 코멘트 삽입
  const _onChange = (e) => {
    setComment(e.target.value);
    console.log('댓글');
  };
  const _onClick = () => {
    dispatch(commentAction.addCommentDB(id, comment));
  };

  return (
    <React.Fragment>
      <Grid>
        <CommentWrap>
          <Text size="30px" bold>
            n개의 댓글
          </Text>
          <textarea
            onChange={_onChange}
            palceholder="댓글을 작성하세요"
            cols="81"
            rows="5"
          />
          <ButtonWrap>
            <Button onClick={_onClick}>댓글작성</Button>
          </ButtonWrap>
          <CommentRegist>
            <Image src="https://t1.daumcdn.net/cfile/blog/2455914A56ADB1E315" />
            <UserDetail>
              <UserName>류띵똥</UserName>
              <Date>2일전</Date>
            </UserDetail>
          </CommentRegist>
          <Text>좋은 자료 감사해요</Text>
        </CommentWrap>
      </Grid>
    </React.Fragment>
  );
};

const Grid = styled.div`
  width: 768px;
  margin: auto;
  border: 1px solid red;
`;

const CommentWrap = styled.div`
  margin: 60px 0;
  padding: 0px 50px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0 0 0;
`;

const Button = styled.button`
  background: green;
  color: white;
  cursor: pointer;
  font-weight: bold;
  width: 100px;
  padding: 0px 10px;
`;

const Image = styled.image`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
`;

const CommentRegist = styled.div`
  display: flex;
  margin: 40px 0 0 0;
`;

const UserDetail = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
`;

const UserName = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
`;

const Date = styled.span`
  font-size: 12px;
  margin-left: 10px;
`;

export default GetPostComment;
