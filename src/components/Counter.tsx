import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface CounterProps {
  size: 24 | 20 | 16 | 12 | 8;
  stylize: 'primary' | 'secondary';
  value: number | string;
  pulse: boolean;
}

const rippleAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2);
    opacity: 1;
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 0 15px rgba(0, 0, 0, 0.1);
    opacity: 0.5;
    transform: scale(1.15);
  }
  100% {
    box-shadow: 0 0 0 30px rgba(0, 0, 0, 0);
    opacity: 0;
    transform: scale(1.3);
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
  position: relative;
  overflow: hidden;

  ${(props) =>
    props.pulse &&
    css`
      animation: ${rippleAnimation} 1.5s infinite ease-out;
    `}
`;

const RippleCircle = styled.div<{ size: number }>`
  position: absolute;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  background-color: inherit;
`;

export const Counter: React.FC<CounterProps> = ({ size, stylize, value, pulse }) => {
  const displayValue =
    typeof value === 'number' && value > 99 ? '99+' : value.toString().substring(0, 3);

  return (
    <StyledCounter size={size} stylize={stylize} pulse={pulse}>
      {displayValue}
      {pulse && <RippleCircle size={size} />}
    </StyledCounter>
  );
};
