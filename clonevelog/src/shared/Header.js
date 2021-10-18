import React from "react";

import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Button from "../elements/Button";

import velog from "../static/velog.png";
import styled from "styled-components";

// import Modal from "react-modal";

const Header = () => {
  //   const [modalIsOpen, setModalIsOpen] = React.useState(false);
  //   const openModal = () => {
  //     setModalIsOpen(true);
  //   };
  //   const closeModal = () => {
  //     setModalIsOpen(false);
  //   };
  //   const onClickModal = () => {
  //     setIsLoginMode(!isLoginMode);
  //   };
  return (
    <React.Fragment>
      <Grid>
        <Grid isFlex padding="16px">
          <VelogImg src={velog} />
          <Button _onClick={() => {}}>로그인</Button>
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
  },
};

export default Header;
