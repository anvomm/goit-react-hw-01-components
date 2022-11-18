import styled from 'styled-components';

export const IsOnlineSpan = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ isOn }) => (isOn ? 'green' : 'red')};
`;

export const FriendName = styled.p`
  font-size: 22px;
  font-weight: 500;
`;
