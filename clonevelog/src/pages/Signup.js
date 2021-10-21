import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";

import Text from "../elements/Text";
import Grid from "../elements/Grid";
import Button from "../elements/Button";
import Input from "../elements/Input";
import { emailCheck } from "../shared/common";
import { history } from "../redux/configureStore";

import { actionCreators as userActions } from "../redux/modules/user";

const Signup = (props) => {
  const dispatch = useDispatch();
  const [userId, setUserId] = React.useState();
  const [userName, setUserName] = React.useState();
  const [password, setPassword] = React.useState();
  const [passwordCheck, setPasswordCheck] = React.useState();

  const { onClickModal } = props;

  const onChangeEmail = (e) => {
    setUserId(e.target.value);
  };
  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const onChangePw = (e) => {
    setPassword(e.target.value);
  };
  const onChangePwCheck = (e) => {
    setPasswordCheck(e.target.value);
  };
  const onClickSignup = () => {
    if (password !== passwordCheck) {
      window.alert("비밀번호와 비밀번호확인이 일치 하지 않습니다.");
      return;
    }
    if (
      userId === "" ||
      userName === "" ||
      password === "" ||
      passwordCheck === ""
    ) {
      window.alert("입력해주세요");
      return;
    }
    if (!emailCheck(userId)) {
      window.alert("잘못된 이메일 형식입니다.");
      return;
    }

    dispatch(userActions.SignUpDB(userId, password, userName));
    onClickModal();
    console.log("가입됐다!");
  };

  return (
    <React.Fragment>
      <Grid mainFlex width="100%">
        <Grid
          width="60%"
          bg="#f1f3f5"
          margin="0px 20px 0px 0px"
          padding="158px 0px 150px 10px"
        >
          <WelcomeImg src="https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg" />
          <Text size="28px" color="#495057" bold align="center">
            환영합니다
          </Text>
        </Grid>

        <Grid width="90%" margin="0px 0px 0px 10px">
          <Grid padding="0px 30px 0px 0px">
            <Text bold size="23px">
              회원가입
            </Text>
            <Text margin="5px 0px" size="14px" align="left">
              이메일 입력
            </Text>
            <Input
              padding="12px 0px"
              margin="0px 12px 12px 0px"
              value={userId}
              placeholder="메일을 입력해주세요"
              _onChange={onChangeEmail}
            />

            <Text margin="5px 0px" size="14px" align="left">
              닉네임 입력
            </Text>
            <Input
              padding="12px 0px"
              margin="0px 12px 12px 0px"
              value={userName}
              placeholder="닉네임을 입력해주세요"
              _onChange={onChangeUserName}
            />

            <Text margin="5px 0px" size="14px" align="left">
              비밀번호 입력
            </Text>
            <Input
              padding="12px 0px"
              margin="0px 12px 12px 0px"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              type="password"
              _onChange={onChangePw}
            />

            <Text margin="5px 0px" size="14px" align="left">
              비밀번호 확인
            </Text>
            <Input
              padding="12px 0px"
              margin="0px 12px 12px 0px"
              placeholder="비밀번호를 확인해주세요"
              value={passwordCheck}
              type="password"
              _onChange={onChangePwCheck}
            />
            <Button
              bold
              color="white"
              size="15px"
              padding="14px"
              width="100%"
              _onClick={onClickSignup}
            >
              회원가입
            </Button>
          </Grid>

          <Grid flexEnd>
            <Text>계정이 이미 있으신가요?</Text>
            <TextBtn onClick={onClickModal}>로그인</TextBtn>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const WelcomeImg = styled.img`
  width: 170px;
  display: flex;
  margin: 0px 0px 0px 30px;
`;
const TextBtn = styled.span`
  color: rgb(18, 184, 134);
  font-weight: bold;
  margin: 12px;
  font-size: 15px;
`;
export default Signup;
