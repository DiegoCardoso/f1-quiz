import { useRef } from 'react';
import styled from 'styled-components';

const LabelBase = styled.label`
  display: block;
  padding: ${({ theme }) => theme.sizes.medium};
  background: rgba(255, 255, 255, 0.1);
  margin-top: ${({ theme }) => theme.sizes.small};
  border: 2px solid transparent;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: none;

  &:hover, &:focus {
    background: rgba(255, 255, 255, 0.2);
  }

  &::first-of-type {
    margin-top: 0;
  }

  &[data-selected=true] {
    border-color: ${({ theme }) => theme.colors.contrastText}
  }

  &[data-show-right-alternative=true] {
    border-color: ${({ theme }) => theme.colors.success}
  }

  &[data-show-wrong-alternative=true] {
    border-color: ${({ theme }) => theme.colors.wrong}
  }
`;

const Label = ({
  htmlFor, selected, showRightAlternative, onClick, children,
}) => {
  const ref = useRef(null);
  const onEnter = (e) => {
    if (e.key === 'Enter') {
      ref.current.click();
    }
  };
  return (
    <LabelBase
      ref={ref}
      tabIndex="0"
      htmlFor={htmlFor}
      onClick={onClick}
      data-selected={selected}
      data-show-right-alternative={showRightAlternative}
      onKeyDown={onEnter}
    >
      {children}
    </LabelBase>
  );
};

export default Label;
