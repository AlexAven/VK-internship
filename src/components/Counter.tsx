import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface CounterProps {
  size: 24 | 20 | 16 | 12 | 8;
  stylize: 'primary' | 'secondary';
  value: number | string;
  pulse: boolean;
}

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const StyledCounter = styled.div<{ size: number; stylize: string; pulse: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) =>
    props.stylize === 'primary' ? 'var(--colors-bg-ui-primary)' : 'var(--colors-bg-ui-secondary)'};
  border-radius: 50%;
  font-size: 12px;
  ${(props) =>
    props.pulse &&
    css`
      animation: ${pulseAnimation} 1s infinite;
    `}
`;

export const Counter: React.FC<CounterProps> = ({ size, stylize, value, pulse }) => {
  const displayValue =
    typeof value === 'number' && value > 99 ? '99+' : value.toString().substring(0, 3);

  return (
    <StyledCounter size={size} stylize={stylize} pulse={pulse}>
      {displayValue}
    </StyledCounter>
  );
};
