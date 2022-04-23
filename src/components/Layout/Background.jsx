import React from "react";

import Box from "./Box";

import { COLOR_BLACK_900 } from "../../themes/theme";

const Background = ({ style, children }) => {
  return (
    <Box style={{ ...style, minHeight: "100vh" }} bgColor="black">
      {children}
    </Box>
  );
};

export default Background;
