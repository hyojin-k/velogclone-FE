import React from 'react';
import styled from 'styled-components';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

// import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
// import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

// import 'tui-color-picker/dist/tui-color-picker.css';
// import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css'
// import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

const Postadd = (props) =>{
    // const editorRef = createRef();

    // const onChangeEditorTextHandler = () =>{
    //     console.log(editorRef.current.getInstance().getMarkdown());
    // }

    return(
        <React.Fragment>
            <MDWrap>
                <Title 
                    type='title' 
                    placeholder='제목을 입력하세요'
                ></Title>
                <Editor 
                    initialValue='당신의 이야기를 입력하세요' 
                    usageStatistics={false}
                    previewStyle='vertical'
                    height='80vh'
                    // ref={editorRef}
                    // onChange={onChangeEditorTextHandler}
                />
            </MDWrap>
            <BtnWrap>
                <Cancle
                    variant='primary'
                    type='submit'
                    className='submitBtn'
                >나가기</Cancle>
                <Add
                    variant='primary'
                    type='submit'
                    className='submitBtn'
                >출간하기</Add>
            </BtnWrap>
        </React.Fragment>
    )
}

const MDWrap = styled.div`
    position: relative;
    height: 100vh;
    border: 1px solid blue;
    box-sizing: border-box;
`

const Title = styled.textarea`
    width: 100vw;
    height: 50px;
    font-size: 48px;
    font-weight: bold;
    border: none;
    padding: 40px;
`

const BtnWrap = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: -16px;
    left:0;
    border: 1px solid red;
    box-sizing: border-box;
    width: 100%;
    height: 64px;
    background-color: #fff;
`

const Cancle = styled.button`
    border: none;
    background-color: transparent;
    font-size: 20px;
    height: 40px;
    padding: 15px;
    border: 1px solid blue;
    box-sizing: border-box;
`
const Add = styled.button`
    border: none;
    color: #fff;
    font-weight: bold;
    background-color: rgb(18, 184, 134);
    font-size: 20px;
    height: 40px;
    padding: 15px;
`

export default Postadd;