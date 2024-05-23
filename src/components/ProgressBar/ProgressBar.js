/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": 8 + "px",
    "--padding": 0 + "px",
    "--radius": 4 + "px",
  },
  medium: {
    "--height": 12 + "px",
    "--padding": 0 + "px",
    "--radius": 4 + "px",
  },
  large: {
    "--height": 24 + "px",
    "--padding": 4 + "px",
    "--radius": 8 + "px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  // const valueRadius = value >= 99.8 ? "4px" : "4px 0px 0px 4px";
  // styles["--valueRadius"] = valueRadius;
  return (
    <label>
      <VisuallyHidden>Progress Bar</VisuallyHidden>
      <ProgressWrapper max="100" value={value} style={styles}>
        {value}
      </ProgressWrapper>
    </label>
  );
};

const ProgressWrapper = styled.progress`
  -webkit-appearance: none;
  border: none;
  appearance: none;
  width: 100%;
  height: var(--height);
  &::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    border-radius: var(--radius);
    padding: var(--padding);
    overflow: hidden;
  }
  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: 4px 0px 0px 4px;
  }
`;

export default ProgressBar;
