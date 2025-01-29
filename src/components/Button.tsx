/* eslint-disable max-len */
import React from 'react';
import styled, { css } from 'styled-components';
import { Label } from './Label';
import { Loading } from './Loading';
import { Counter } from './Counter';

interface ButtonProps {
  size: 28 | 36 | 56;
  stylize: 'primary' | 'secondary';
  state: 'enabled' | 'loading' | 'disabled';
  counter: boolean;
  focused: boolean;
}

const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => `${props.size}px`};
  width: ${(props) => (props.size === 28 ? '96px' : props.size === 36 ? '112px' : '131px')};
  background-color: ${(props) => (props.stylize === 'primary' ? 'var(--colors-bg-primary)' : 'var(--colors-bg-secondary)')};
  color: ${(props) => (props.stylize === 'primary' ? 'var(--colors-text-primary)' : 'var(--colors-text-secondary)')};
  border: none;
  border-radius: var(--radii);
  padding: 16px;
  gap: 8px;
  cursor: ${(props) => (props.state === 'disabled' ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.state === 'disabled' ? 0.6 : 1)};
  outline: ${(props) => (props.focused ? '3px solid var(--colors-ui-border)' : 'none')};
  outline-offset: ${(props) => (props.focused ? '1px' : 'none')};

  ${(props) =>
    props.state === 'loading' &&
    css`
      justify-content: center;
      gap: 0;
    `}

  &:hover {
    background-color: ${(props) => (props.stylize === 'primary' ? 'var(--colors-bg-primary-hover)' : 'var(--colors-bg-secondary-hover)')};
  }
`;

interface ButtonComponent extends React.FC<ButtonProps & { children?: React.ReactNode }> {
  Label: typeof Label;
  Loading: typeof Loading;
  Counter: typeof Counter;
}

export const Button: ButtonComponent = ({
  children,
  size,
  stylize,
  state,
  counter,
  focused,
  ...rest
}) => {
  return (
    <ButtonContainer size={size} stylize={stylize} state={state} focused={focused} counter={true} {...rest}>
      {state === 'loading' ? (
        <Loading stylize={stylize} />
      ) : (
          React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
    if (!counter && child.type === Counter) return null;
    return React.cloneElement(
      child as React.ReactElement & { buttonState?: unknown },
      {
        buttonState: { size, stylize, state, counter },
      },
    );
  }
  return child;
        })
      )}
    </ButtonContainer>
  );
};

Button.Label = Label;
Button.Loading = Loading;
Button.Counter = Counter;
