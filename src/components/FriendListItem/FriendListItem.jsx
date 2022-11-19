import PropTypes from 'prop-types';
import { IsOnlineSpan, FriendName, FriendsItem } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <FriendsItem>
    <IsOnlineSpan isOn={isOnline}></IsOnlineSpan>
    <img src={avatar} alt={`${name} avatar`} width="48" />
    <FriendName>{name}</FriendName>
  </FriendsItem>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
