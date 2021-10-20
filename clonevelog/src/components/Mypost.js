import React from 'react';
import styled from 'styled-components';

import { history } from '../redux/configureStore';

const Mypost = (props) =>{
    const { postingId, thumbNail, title, content, dayBefore, commentCnt, userName } = props;
    return (
        <React.Fragment>
            <Wrap>
                <ImageBtn onClick = {()=>{history.push('detail')}}>
                    <Image></Image>
                </ImageBtn>
                <Description>
                    <Title onClick = {()=>{history.push('detail')}}>
                        {title}
                    </Title>
                    <Text>
                        {content}
                    </Text>
                    <TagWrap>

                    </TagWrap>
                    <Date>{dayBefore}  ·  </Date>
                    <Comment>{commentCnt}개의 댓글</Comment>
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
const ImageBtn = styled.button`
    display: block;
    width: 100%;
    border: none;
    box-sizing: border-box;
    background-color: transparent;
    cursor: pointer;
    padding: 0;
`
const Image = styled.image`
    display: block;
    border: 1px solid blue;
    box-sizing: border-box;
    width: 100%;
    height: 402px;
`
const Description = styled.div`
    width: 100%;
`
const Title = styled.button`
    border: none;
    background-color: transparent;
    font-size: 24px;
    font-weight: bold;
    margin: 12px 0 12px -8px;
    cursor: pointer;
`
const Text = styled.p`
    margin: 0 0 20px 0;
`
const TagWrap = styled.div``
const Date = styled.span`
  font-size: 14px;
  color:rgb(134, 142, 150);
`
const Comment = styled.span`
  font-size: 14px;
  color:rgb(134, 142, 150);
`


export default Mypost;