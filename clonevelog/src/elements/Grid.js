import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    children,
    width,
    height,
    padding,
    margin,
    bg,
    center,
    isFlex,
    borderRadius,
    border,
    flexBasis,
    wrap,
    isShadow,
    flexEnd,
    mainFlex,
    isPosition,
    top,
    right,
    maxWidth,
    minWidth,
  } = props;

  const styles = {
    width,
    height,
    padding,
    margin,
    bg,
    center,
    isFlex,
    borderRadius,
    border,
    flexBasis,
    wrap,
    isShadow,
    flexEnd,
    mainFlex,
    isPosition,
    top,
    right,
    maxWidth,
    minWidth,
  };
  return (
    <React.Fragment>
      <GridBox {...styles}>{children}</GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  children: null,
  width: false,
  height: false,
  maxWidth: "",
  minWidth: "",
  padding: false,
  margin: false,
  bg: false,
  center: false,
  isFlex: false,
  borderRadius: false,
  border: false,
  //수정사항
  wrap: false,
  flexBasis: false,
  isShadow: false,
  flexEnd: false,
  mainFlex: false,
  isPosition: false,
  top: false,
  right: false,
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  max-width: ${(props) => props.maxWidth};
  min-width: ${(props) => props.minWidth};
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding : ${props.padding}; ` : "")};
  ${(props) => (props.margin ? `margin : ${props.margin}; ` : "")};
  ${(props) => (props.bg ? `background-color : ${props.bg}` : "")};
  ${(props) =>
    props.isFlex
      ? `display : flex; align-items : center ; justify-content : space-between;`
      : ""};
  ${(props) => (props.center ? `text-align: center;` : "")}
  ${(props) =>
    props.borderRadius ? `border-radius : ${props.borderRadius};` : ""};
  ${(props) => (props.border ? `border : ${props.border};` : "")};
  ${(props) => (props.wrap ? `flex-wrap : wrap` : "")};
  ${(props) => (props.flexBasis ? `flex-basis : 30% ` : "")};
  ${(props) => (props.center ? `text-align: center;` : "")}
  ${(props) =>
    props.borderRadius ? `border-radius : ${props.borderRadius};` : ""};
  ${(props) => (props.border ? `border : ${props.border};` : "")};
  ${(props) =>
    props.isShadow
      ? `box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 2px 5px rgba(0, 0, 0, 0.12);`
      : ""};
  ${(props) =>
    props.flexEnd ? `display : flex; justify-content: flex-end;` : ""};
  ${(props) =>
    props.mainFlex
      ? `display : flex; align-items : center ; justify-content:center;`
      : ""};
  ${(props) => (props.isPosition ? `position : ${props.isPosition}` : "")};
  ${(props) => (props.top ? `top : ${props.top}` : "")};
  ${(props) => (props.right ? `right : ${props.right}` : "")};
`;

export default Grid;
