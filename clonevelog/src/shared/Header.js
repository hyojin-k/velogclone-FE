import React from "react";

import Grid from "../elements/Grid";
import Button from "../elements/Button";

import velog from "../static/velog.png";
import styled from "styled-components";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configureStore";
import { actionCreators as userActions } from "../redux/modules/user";

const Header = () => {
  const isLogin = useSelector((state) => state.user.is_login);
  console.log("로그인", isLogin);
  const dispatch = useDispatch();
  const [LoginMode, setLoginMode] = React.useState(true);
  const [modalOpen, setModalOpen] = React.useState(false);
  const openModal = () => {
    setModalOpen(true);
    console.log("modal창 열린다!");
  };
  const closeModal = () => {
    setModalOpen(false);
    console.log("modal창 닫힌다!");
  };
  const onClickModal = () => {
    setLoginMode(!LoginMode);
  };
  const onClickLogOut = () => {
    dispatch(userActions.LogOutDB());
  };
  return (
    <React.Fragment>
      <Grid>
        <Grid isFlex padding="16px" maxWidth="1024px" margin="0 auto">
          <VelogImg
            src={velog}
            onClick={() => {
              history.push("/");
            }}
          />

          {isLogin ? (
            <Button
              bold
              size="16px"
              color="#fff"
              backgroundColor="rgb(52, 58, 64)"
              padding="6px 18px"
              borderRadius="20px"
              _onClick={onClickLogOut}
            >
              로그아웃
            </Button>
          ) : (
            <Grid>
              <Button
                bold
                size="16px"
                color="#fff"
                backgroundColor="rgb(52, 58, 64)"
                padding="6px 18px"
                borderRadius="20px"
                _onClick={openModal}
              >
                로그인
              </Button>
              <Modal isOpen={modalOpen} close={closeModal} style={ModalStyle}>
                {LoginMode ? (
                  <Signin onClickModal={onClickModal} />
                ) : (
                  <Signup onClickModal={onClickModal} />
                )}

                <CloseButton
                  src="https://image.flaticon.com/icons/png/512/458/458595.png"
                  onClick={closeModal}
                ></CloseButton>
              </Modal>
            </Grid>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const VelogImg = styled.img`
  width: 120px;
  margin-left: -40px;
`;
const ModalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(247, 247, 247, 0.8)",
    transition: "opacity 2000ms ease-in-out",
  },
  content: {
    width: "650px",
    height: "510px",
    margin: "auto",
    border: "none",
    boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.1)",
    padding: "0px",
  },
};

const CloseButton = styled.img`
  width: 20px;
  position: absolute;
  top: 30px;
  right: 30px;
`;
export default Header;
