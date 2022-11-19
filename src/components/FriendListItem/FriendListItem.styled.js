import styled from 'styled-components';

export const FriendsItem = styled.li`
  height: 68px;
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 15px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  transition: transform 250ms linear, box-shadow 250ms linear;

  &:hover,
  &:focus {
    transform: scale(1.02);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15), 0px 4px 8px rgba(0, 0, 0, 0.12),
      1px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

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
