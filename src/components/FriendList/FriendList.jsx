import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { ListOfFriends } from './FriendList.styled';

export const FriendList = ({ friends }) => (
  <ListOfFriends>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        name={friend.name}
        avatar={friend.avatar}
        isOnline={friend.isOnline}
      />
    ))}
  </ListOfFriends>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
