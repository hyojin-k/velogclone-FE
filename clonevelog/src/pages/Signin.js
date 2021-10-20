import React from "react";
import styled from "styled-components";
import Grid from "../elements/Grid";
import Input from "../elements/Input";
import Text from "../elements/Text";
import Button from "../elements/Button";
import { emailCheck } from "../shared/common";

import { history } from "../redux/configureStore";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Signin = (props) => {
  const [userId, setUserId] = React.useState();
  const [password, setPassword] = React.useState();
  const dispatch = useDispatch();
  const { onClickModal } = props;

  const onChangeId = (e) => {
    setUserId(e.target.value);
    console.log("이메일입력");
  };
  const onChangePw = (e) => {
    setPassword(e.target.value);
    console.log("비밀번호입력");
  };
  const onClickLogin = () => {
    if ((userId === "") | (password === "")) {
      window.alert("이메일 또는 비밀번호를 입력해주세요.");
      return;
    }
    if (!emailCheck(userId)) {
      window.alert("잘못된 이메일 형식입니다.");
      return;
    }
    dispatch(userActions.LoginDB(userId, password));
    console.log("로그인했습니다!");
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
              로그인
            </Text>
            <Text margin="5px 0px" size="14px" align="left">
              이메일로 로그인
            </Text>
            <Input
              padding="12px 0px"
              margin="0px 12px 12px 0px"
              value={userId}
              placeholder="메일을 입력해주세요"
              _onChange={onChangeId}
            />
            <Text margin="5px 0px" size="14px" align="left">
              비밀번호
            </Text>
            <Input
              padding="12px 0px"
              margin="0px 12px 12px 0px"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              type="password"
              _onChange={onChangePw}
            />
            <Button
              bold
              color="white"
              size="15px"
              padding="14px"
              width="100%"
              _onClick={onClickLogin}
            >
              로그인
            </Button>
          </Grid>

          <Grid flexEnd>
            <Text>아직 회원이 아니신가요?</Text>
            <TextBtn onClick={onClickModal}>회원가입</TextBtn>
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

export default Signin;
