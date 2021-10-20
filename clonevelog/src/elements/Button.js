import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const {
    width,
    margin,
    padding,
    borderRadius,
    size,
    color,
    backgroundColor,
    _onClick,
    isFloat,
    children,
    isShadow,
    _onMouseOver,
    bold,
  } = props;

  const styles = {
    width: width,
    margin: margin,
    padding: padding,
    borderRadius: borderRadius,
    size: size,
    color: color,
    backgroundColor: backgroundColor,
    isFloat: isFloat,
    isShadow: isShadow,
    _onMouseOver: _onMouseOver,
    bold: bold,
  };

  return (
    <>
      <ElButton {...styles} onClick={_onClick}>
        {children}
      </ElButton>
    </>
  );
};

Button.defaultProps = {
  width: '',
  margin: '',
  padding: '5px',
  borderRadius: '',
  size: '',
  color: 'black',
  bold: false,
  backgroundColor: 'rgb(18, 184, 134)',
  isFloat: '',
  children: null,
  _onClick: () => {},
  isShadow: false,
  _onMouseOver: () => {},
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: none;
  border-radius: ${(props) => props.borderRadius};
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.bold ? '600' : '400')};
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;
  ${(props) =>
    props.isShadow
      ? `box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 2px 5px rgba(0, 0, 0, 0.12);`
      : ''}
`;

export default Button;
