import React from 'react';
import styled from 'styled-components';

interface LabelProps {
  text: string;
}

const StyledLabel = styled.span`
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1;
  flex-grow: 0;
  flex-shrink: 1;
`;

export const Label: React.FC<LabelProps> = ({ text }) => {
  return <StyledLabel>{text}</StyledLabel>;
};
