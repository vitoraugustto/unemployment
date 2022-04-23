import React from "react";
import styled from "styled-components";

export const Title = ({ style, color, align, children }) => {
  return (
    <StyledTitle style={{ ...style }} color={color} align={align}>
      {children}
    </StyledTitle>
  );
};

export const SubTitle = ({ style, color, align, children }) => {
  return (
    <StyledSubTitle style={{ ...style }} color={color} align={align}>
      {children}
    </StyledSubTitle>
  );
};

const StyledTitle = styled.h1`
  font-weight: bold;
  font-size: 68px;
  font-family: Poppins;
  color: ${(props) => (props.color ? props.color : "white")};
  text-align: ${(props) => (props.align ? props.align : "left")};
`;

const StyledSubTitle = styled.h2`
  font-weight: normal;
  font-size: 38px;
  font-family: Poppins;
  color: ${(props) => (props.color ? props.color : "white")};
  text-align: ${(props) => (props.align ? props.align : "left")};
`;
