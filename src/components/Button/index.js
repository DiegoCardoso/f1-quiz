import styled from 'styled-components';

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border: 0;
  display: block;
  width: 100%;
  padding: ${({ theme }) => theme.sizes.medium};
  margin-top: ${({ theme }) => theme.sizes.medium};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: none;
  font-size: 14px;
  font-weight: bold;
  color: #FFF;

  &:disabled {
    background-image: linear-gradient(45deg, #0000009c, #0000009c);
  }

  &:hover:not([disabled]) {
    background-image: linear-gradient(45deg, #ffffff26, #ffffff26);
  }

  &:focus {
    background-image: linear-gradient(45deg, #ffffff26, #ffffff26);
  }
`;

export default Button;
