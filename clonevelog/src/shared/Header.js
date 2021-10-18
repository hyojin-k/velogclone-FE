import React from 'react';
import styled from 'styled-components';

const Header = (props) =>{
    return (
        <React.Fragment>
            <Wrap>
                <Logo>velog</Logo>
                <BtnWrap>
                    <Login>로그인</Login>
                </BtnWrap>
            </Wrap>
        </React.Fragment>
    )
}

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid red;
    box-sizing: border-box;
    max-width: 1024px;
    margin: 0 auto;
`
const Logo = styled.h1`
    font-size: 36px;
    line-height: 32px;
    color: rgb(33, 37, 41);
`
const BtnWrap = styled.div`
    border: 1px solid blue;
    box-sizing: border-box;
`
const Login = styled.button`
    border: none;
    background-color: rgb(33, 37, 41);
    color: #fff;
    font-size: 20px;
    padding: 0 10px;
    cursor: pointer;
`
export default Header;