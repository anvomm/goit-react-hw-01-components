import styled from 'styled-components';

export const ListOfFriends = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 80px;
  text-align: center;
  width: 280px;
  margin-left: auto;
  margin-right: auto;
`;

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
