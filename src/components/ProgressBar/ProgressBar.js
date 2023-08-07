/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--heigth" : "8px",
    "--borderRadius": 4 + "px",
    "--padding": "0"
  },
  medium: {
    "--heigth" : "12px",
    "--borderRadius": 4 + "px",
    "--padding": "0"
  },
  large: {
    "--heigth" : "24px",
    "--borderRadius": 8 + "px",
    "--padding": "4px"
  }
};

const ProgressBar = ({ value, size }) => {

  const styles = SIZES[size];

  return <ProgressWrapper style={styles} role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={value}>
    <VisuallyHidden>{value}%</VisuallyHidden>
    <BarWrapper>
      <Bar style={{ "--width" : value + '%' }} />
    </BarWrapper>
  </ProgressWrapper>
  ;
};

const ProgressWrapper = styled.div`
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    overflow: hidden;
    border-radius: var(--borderRadius);
    height: var(--heigth);
    padding: var(--padding);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  height: 100%;

  /* Trim off corners when progress bar is near-full. */
  overflow: hidden;
`;

const Bar = styled.div`
    width: var(--width);
    height: 100%;
    background-color: ${COLORS.primary};
    border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
