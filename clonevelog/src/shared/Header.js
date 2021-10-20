import React from "react";

import Grid from "../elements/Grid";
import Button from "../elements/Button";

import velog from "../static/velog.png";
import styled from "styled-components";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

import Modal from "react-modal";
import { useSelector } from "react-redux";

const Header = () => {
  const isLogin = useSelector((state) => state.user.is_login);
  console.log(isLogin);
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
  return (
    <React.Fragment>
      <Grid>
        <Grid isFlex padding="16px">
          <VelogImg src={velog} />
          <Button padding="12px" _onClick={openModal}>
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
      </Grid>
    </React.Fragment>
  );
};

const VelogImg = styled.img`
  width: 100px;
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
