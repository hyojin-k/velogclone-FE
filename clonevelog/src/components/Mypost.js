import React from 'react';
import styled from 'styled-components';

const Mypost = (props) =>{
    return (
        <React.Fragment>
            <Wrap>
                <Image>

                </Image>
                <Description>
                    <Title>
                        HTTP의 특성과 쿠키, 세션, 토큰
                    </Title>
                    <Text>
                        서버는 어떻게 클라이언트를 식별할까? 쿠키, 세션, 토큰은 결국 HTTP의 특성으로부터 탄생했다.
                    </Text>
                    <TagWrap>

                    </TagWrap>
                    <Date>어제</Date>
                    <Comment>0개의 댓글</Comment>
                </Description>
            </Wrap>
        </React.Fragment>
    )
}

const Wrap = styled.div`
    border-bottom: 1px solid #dbdbdb;
    box-sizing: border-box;
    width: 768px;
    padding: 60px 0;
    margin: 0 auto;
`
const Image = styled.div`
    border: 1px solid blue;
    box-sizing: border-box;
    width: 100%;
    height: 402px;
`
const Description = styled.div`
    border: 1px solid green;
    box-sizing: border-box;
    width: 100%;
`
const Title = styled.h2`
`
const Text = styled.p``
const TagWrap = styled.div``
const Date = styled.span``
const Comment = styled.span``


export default Mypost;