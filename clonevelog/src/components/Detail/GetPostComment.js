import React, { useState } from 'react';
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
  };
  const _onClick = () => {
    dispatch(commentAction.addCommentDB(id, comment));
  };

  return (
    <React.Fragment>
      <TextBox>
        <CountComment>n개의 댓글</CountComment>
        <TextArea>
          <TextAreaDetail
            onChange={_onChange}
            placeholder="댓글을 작성해 주세요"
          ></TextAreaDetail>
          <ButtonWrap>
            <InputButton
              onClick={_onClick}
              color="teal"
              class="sc-dnqmqq gzELJz"
            >
              댓글 작성
            </InputButton>
          </ButtonWrap>
        </TextArea>
      </TextBox>
      <RegistComment>
        <RegistCommentWrap>
          <NickName>
            <Profile>
              <Image
                src="https://media.vlpt.us/images/jeon3029/profile/81d64f8c-6b15-4551-a623-c09596311d58/social.jpeg?w=120"
                alt=""
              />
              <CommentInfo>
                <UserName>류띵똥</UserName>
                <Date>2일 전</Date>
              </CommentInfo>
            </Profile>
          </NickName>
          <CommentWrap>
            <p> 누구인가? 누가 기침소리를 내었어? </p>
          </CommentWrap>
          <ReCommentWrap>
            <ReComment>
              <span>답글 달기</span>
            </ReComment>
          </ReCommentWrap>
        </RegistCommentWrap>
      </RegistComment>
    </React.Fragment>
  );
};

const TextBox = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 3rem;
  color: rgb(52, 58, 64);
  width: 100%;
  width: 768px;
  margin-left: auto;
  margin-right: auto;
`;

const CountComment = styled.h4`
  font-size: 1.125rem;
  line-height: 1.5;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const TextArea = styled.div`
  margin-top: 3rem;
  color: rgb(52, 58, 64);
`;

const TextAreaDetail = styled.textarea`
  height: 70px;
  margin-bottom: 1rem;
  resize: none;
  padding: 1rem 1rem 1.5rem;
  outline: none;
  border: 1px solid rgb(233, 236, 239);
  width: 100%;
  border-radius: 4px;
  min-height: 6.125rem;
  font-size: 1rem;
  color: rgb(33, 37, 41);
  line-height: 1.75;
`;

const ButtonWrap = styled.div`
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
`;

const InputButton = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  background: rgb(18, 184, 134);
  color: white;
  border-radius: 4px;
  padding: 0px 1.25rem;
  height: 2rem;
  font-size: 1rem;
  _onChange = () => {},
`;

const RegistComment = styled.div`
  margin-top: 2.5rem;
`;

const RegistCommentWrap = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

const NickName = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`;

const Profile = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

const Image = styled.img`
  display: block;
  border-radius: 50%;
  object-fit: cover;
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
  width: 3.375rem;
  height: 3.375rem;
`;

const CommentInfo = styled.div`
  margin-left: 0.5rem;
  line-height: 1;
`;

const UserName = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
`;

const Date = styled.div`
  font-size: 0.75rem;
  margin-top: 0.5rem;
  color: rgb(134, 142, 150);
`;

const Comment = styled.div`
  font-size: 1rem;
`;

const CommentWrap = styled.div`
  font-size: 1rem;
  color: rgb(34, 36, 38);
  line-height: 1.7;
  letter-spacing: -0.004em;
  word-break: keep-all;
  overflow-wrap: break-word;
`;

const ReCommentWrap = styled.div`
  margin-top: 2rem;
`;

const ReComment = styled.div`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(18, 184, 134);
  font-weight: bold;
  cursor: pointer;
`;

const Imogy = styled.svg`
  margin-right: 0.5rem;
  width: 12;
  height: 12;
  fill: none;
`;

const Path = styled.path`
fill: currentcolor;
d: path("M 5.5 2.5 h 1 v 3 h 3 v 1 h -3 v 3 h -1 v -3 h -3 v -1 h 3 v -3 Z");
}
`;
const Path2 = styled.path`
  fill: currentcolor;
  fill-rule: evenodd;
  d: path(
    'M 1 0 a 1 1 0 0 0 -1 1 v 10 a 1 1 0 0 0 1 1 h 10 a 1 1 0 0 0 1 -1 V 1 a 1 1 0 0 0 -1 -1 H 1 Z m 10 1 H 1 v 10 h 10 V 1 Z'
  );
  clip-rule: evenodd;
`;

export default GetPostComment;
