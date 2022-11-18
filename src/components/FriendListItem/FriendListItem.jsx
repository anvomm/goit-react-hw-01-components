import PropTypes from 'prop-types';
import { IsOnlineSpan, FriendName } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <IsOnlineSpan isOn={isOnline}></IsOnlineSpan>
    <img className="avatar" src={avatar} alt={name} width="48" />
    <FriendName>{name}</FriendName>
  </>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
