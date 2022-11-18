import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { ListOfFriends, FriendsItem } from './FriendList.styled';

export const FriendList = ({ friends }) => (
  <ListOfFriends>
    {friends.map(friend => (
      <FriendsItem key={friend.id}>
        <FriendListItem
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      </FriendsItem>
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
