import styled from 'styled-components';

export const Widget = styled.div`
  background: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.sizes.large};
  box-shadow: 00px 5px 11px #00000038, 0px 0px 5px #0000001a;
`;
Widget.Title = styled.div`
   background:  ${({ theme }) => theme.colors.primary};
   padding: ${({ theme }) => theme.sizes.large};
   font-weight: bold;
   font-size: 18px;
`;
Widget.Content = styled.div`
  margin: ${({ theme }) => theme.sizes.large};
`;

export default Widget;
