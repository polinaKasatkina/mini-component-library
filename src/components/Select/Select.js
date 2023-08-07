import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';
// const SelectIcon = <Icon id="chevron-down" />;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
 

  return (
    <>
    <SelectWrapper>
    <SelectBox value={value} onChange={onChange}>
      {children}
    </SelectBox>
    <SelectIcon id="chevron-down" />
    </SelectWrapper>
    </>
    
  );
};

const SelectWrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const SelectBox = styled.select`

  height: 48px;
  background-color: ${COLORS.transparentGray15};
  border: none;
  border-radius: 8px;
  padding: 12px 52px 12px 16px;
  color: ${COLORS.gray700};
  font-family: "Roboto", sans-serif;
  font-size: 1rem;

  /* Hiding arrow */
  appearance: none;

  &:focus {
    border: ${COLORS.primary};
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const SelectIcon = styled(Icon)`
  position: absolute; 
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  pointer-events: none;
  width: 24px;
  height: 24px;
`;

export default Select;
