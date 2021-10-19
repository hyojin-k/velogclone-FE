import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const {
    width,
    padding,
    bg,
    height,
    border,
    size,
    margin,
    value,
    placeholder,
    _onChange,
    type,
    border_radius,
    color,
    bold,
    placeholderColor,
  } = props;

  const styles = {
    padding: padding,
    width: width,
    margin: margin,
    height: height,
    border: border,
    size: size,
    bg: bg,
    border_radius,
    color,
    bold,
    placeholderColor,
  };
  return (
    <React.Fragment>
      <InputBox
        {...styles}
        placeholder={placeholder}
        type={type}
        onChange={_onChange}
        value={value}
      />
    </React.Fragment>
  );
};

Input.defaultProps = {
  width: "100%",
  padding: "",
  height: "100%",
  border: "",
  size: "14px",
  margin: "",
  label: "",
  value: "",
  placeholder: "",
  _onChange: () => {},
  type: "text",
  name: "",
  bg: null,
  border_radius: "",
  color: "",
  multiline_noValue: "",
  bold: false,
  placeholderColor: "",
};

const InputBox = styled.input`
  border: none;
  ${(props) => props.bold && `font-weight : 600;`}
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  font-size: ${(props) => props.size};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bg};
  border-radius: ${(props) => props.border_radius};
  border: 1px solid #dcdddd;
  color: ${(props) => props.color};
  :focus {
    outline: none;
  }
  ::placeholder {
    color: ${(props) => props.placeholderColor};
  }
`;

export default Input;
