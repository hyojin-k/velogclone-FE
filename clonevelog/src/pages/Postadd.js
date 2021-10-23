import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { MdOutlineArrowBack } from "react-icons/md";

import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

import { getCookie } from "../shared/Cookie";
const Postadd = (props) => {

  const dispatch = useDispatch();
  const editorRef = useRef();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const jwtToken = getCookie("is_login");

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  // const dataURLtoFile = (dataurl, fileName) => {
  //   let arr = dataurl.split(","),
  //     mime = arr[0].match(/:(.*?);/)[1],
  //     bstr = atob(arr[1]),
  //     n = bstr.length,
  //     u8arr = new Uint8Array(n);
  //   while (n--) {
  //     u8arr[n] = bstr.charCodeAt(n);
  //   }
  //   return new File([u8arr], fileName, { type: mime });
  // };

  const canclePost = () => {
    history.goBack();
  };
  const addPost = () => {
    const contentHTML = editorRef.current.getInstance().getHTML();
    const contentMarkdown = editorRef.current.getInstance().getMarkdown();
    // const image = contentHTML.split("=")[1]?.split('"')[1];

    const imageUrl = contentHTML.split("=")[1]?.split('"')[1];
    const content = contentMarkdown.replaceAll("#", "").split("!")[0];

    const post = {
      // userName: jwtToken,
      content: content,
      title: title,
      imageUrl: imageUrl,
    };
    console.log(post);
    dispatch(postActions.addPostMW(post));
  };

  return (
    <React.Fragment>
      <MDWrap>
        <Title
          type="title"
          placeholder="제목을 입력하세요"
          onChange={changeTitle}
        ></Title>
        <Editor
          placeholder="당신의 이야기를 적어보세요..."
          usageStatistics={false}
          previewStyle="vertical"
          previewHighlight={false}
          height="80vh"
          ref={editorRef}
          event={{}}
        />
      </MDWrap>
      <BtnWrap>
        <Cancle
          variant="primary"
          type="submit"
          className="submitBtn"
          onClick={canclePost}
        >
          <MdOutlineArrowBack style={{ marginRight: "10px" }} />
          나가기
        </Cancle>

        <Add
          variant="primary"
          type="submit"
          className="submitBtn"
          onClick={addPost}
        >
          출간하기
        </Add>
      </BtnWrap>
    </React.Fragment>
  );
};

const MDWrap = styled.div`
  height: calc(100%-130px);
  box-sizing: border-box;
`;

const Title = styled.textarea`
  width: 100%;
  height: 130px;
  resize: none;
  scrollbar-width: none;
  font-size: 48px;
  font-weight: bold;
  border: none;
  padding: 40px;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue",
    "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕,
    "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum,
    Tahoma, Geneva, sans-serif;
  &::-webkit-scrollbar {
    display: none;
  }
  &::placeholder {
    color: lightgray;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  box-sizing: border-box;
  width: 100%;
  height: 64px;
  background-color: #fff;
  box-shadow: 0 0 5px #dbdbdb;
`;

const Cancle = styled.button`
  border: none;
  background-color: transparent;
  font-size: 18px;
  height: 40px;
  padding: 8px 15px;
  margin: 12px 0 0 15px;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #e6e6e6;
  }
`;
const Add = styled.button`
  border: none;
  color: #fff;
  font-weight: bold;
  background-color: rgb(18, 184, 134);
  font-size: 18px;
  height: 40px;
  padding: 8px 20px;
  margin: 12px 15px 0 0;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: rgb(18, 194, 124);
  }
`;

export default Postadd;
