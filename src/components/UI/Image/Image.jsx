import React from "react";
import styled from "styled-components";
import IMAGES from "./images";

const Image = ({ src, size }) => {
  return <StyledImage src={IMAGES[src].source} size={size} />;
};

const StyledImage = styled.img`
  width: ${(props) => (props.size ? props.size : "24px")};
  height: ${(props) => (props.size ? props.size : "24px")};
`;

export default Image;
