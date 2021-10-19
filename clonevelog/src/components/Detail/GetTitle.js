import React from 'react';
import styled from 'styled-components';

const GetTitle = () => {
  return (
    <All>
      <Title>
        <H1>CiAgPGcgc3RybICAgPGVsbGlwcfasdfasdfasdfasdf</H1>
        <NickDateLike>
          <NickDate>
            <NickName>
              seunghwan12
              <Separator>· 2021년 10월 18일(월)</Separator>
            </NickName>
          </NickDate>

          <LikeButton data-testid="like-btn" class="sc-hORach bLLSYM">
            <LikeButtonStyled width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"
              ></path>
            </LikeButtonStyled>
            <FontSize>17</FontSize>
          </LikeButton>
        </NickDateLike>
      </Title>
      <Tag>CiAgPHRpdGxlPlasdfasdfas</Tag>
      <SubTitle>
        <H2>React 표류기</H2>
        <Point
          width="32"
          height="48"
          fill="none"
          viewBox="0 0 32 48"
          class="series-corner-image"
        >
          <PointDetail
            fill="#12B886"
            d="M32 0H0v48h.163l16-16L32 47.836V0z"
          ></PointDetail>
        </Point>
        <SubList>
          <SubList2>
            <div>클론 코딩 엄청 어렵네...</div>
          </SubList2>
        </SubList>
        <HiddenTitle>
          <Hidden>
            <HiddenArrow
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 14l5-5 5 5z"></path>
            </HiddenArrow>
          </Hidden>
        </HiddenTitle>
      </SubTitle>
    </All>
  );
};

const All = styled.div`
  margin-top: 2rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
`;

const H1 = styled.h1`
  font-size: 2.25rem;
  line-height: 1.5;
  letter-spacing: -0.004em;
  margin-top: 0px;
  font-weight: 800;
  color: rgb(52, 58, 64);
  margin-bottom: 2rem;
  word-break: break-all;
`;

const NickDateLike = styled.div`
  -webkit-box-align: center;
  align-items: center;
  font-size: 1rem;
  color: rgb(73, 80, 87);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const NickDate = styled.div`
  font-size: 0.875rem;
`;

const NickName = styled.div`
  color: rgb(52, 58, 64);
  font-weight: bold;
  font-size: 0.875rem;
  max-width: 768px;
`;

const Separator = styled.span`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

const LikeButton = styled.button`
  background: white;
  border: 1px solid rgb(173, 181, 189);
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 1.5rem;
  border-radius: 0.75rem;
  outline: none;
`;

const LikeButtonStyled = styled.svg`
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 0.75rem;
  color: rgb(173, 181, 189);
`;

const FontSize = styled.span`
  font-size: 0.75rem;
  font-weight: bold;
  color: rgb(173, 181, 189);
`;

const Tag = styled.div`
  margin-top: 0.5rem;
  margin-bottom: -0.5rem;
  min-height: 0.5rem;
  height: 1.5rem;
  font-size: 0.75rem;
  border-radius: 0.75rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  background: rgb(241, 243, 245);
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(12, 166, 120);
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
`;

const SubTitle = styled.div`
	max-width : 768px;
	padding: 1rem;
	margin-top: 2rem;
	background: rgb(248, 249, 250);
	border-radius: 8px;
	box-shadow: rgb(0 0 0 / 6%) 0px 0px 4px 0px;
	position: relative;
`;

const H2 = styled.h2`
  font-size: 1.125rem;
  padding-right: 2.5rem;
  margin-bottom: 1.5rem;
  margin-top: 0px;
  color: rgb(73, 80, 87);
  font-weight: bold;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const Point = styled.svg`
  right: 1rem;
  width: 1.5rem;
  height: auto;
  position: absolute;
  fill: none;
  top: 0px;
`;

const PointDetail = styled.path`
  fill: rgb(18, 184, 134);
  d: path('M 32 0 H 0 v 48 h 0.163 l 16 -16 L 32 47.836 V 0 Z');
`;

const SubList = styled.ol`
  font-size: 0.875rem;
  margin-bottom: -1rem;
  padding-left: 0px;
  line-height: 1.8;
  color: rgb(73, 80, 87);
  counter-reset: item 0;
  max-width: 768px;
`;

const SubList2 = styled.div`
  font-size: 0.875rem;
  line-height: 1.8;
  color: rgb(73, 80, 87);
`;

const HiddenTitle = styled.div`
  margin-top: 3rem;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`;

const Hidden = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-left: -5px;
  color: rgb(73, 80, 87);
  line-height: 1;
  cursor: pointer;
`;

const HiddenArrow = styled.svg`
  margin-right: 0.25rem;
  color: rgb(52, 58, 64);
  font-size: 1.5rem;
  stroke: currentcolor;
  fill: currentcolor;
  stroke-width: 0;
  height: 1em;
  width: 1em;
`;

export default GetTitle;
