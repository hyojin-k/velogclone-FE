import React from 'react';
import styled from 'styled-components';

const Header = (props) =>{
    return (
        <React.Fragment>
            <Wrap>
                <Logo>
                    <LogoBtn>
                        velog
                    </LogoBtn>
                </Logo>
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
    max-width: 1728px;
    margin: 0 auto;
`
const Logo = styled.h1`
    color: rgb(33, 37, 41);
`
const LogoBtn = styled.button`
    border: none;
    background-color: transparent;
    font-size: 36px;
    line-height: 32px;
    cursor: pointer;
`
const BtnWrap = styled.div`
    border: 1px solid blue;
    box-sizing: border-box;
`
const Login = styled.button`
    border: none;
    background-color: rgb(33, 37, 41);
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    padding: 5px 15px;
    border-radius: 20px;
    cursor: pointer;
`
export default Header;