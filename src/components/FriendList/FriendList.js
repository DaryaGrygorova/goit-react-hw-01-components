import PropTypes from 'prop-types';
import FriendItem from './FriendItem/FriendItem';
import { FriendListWrap } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <FriendListWrap className="friend-list">
      {friends.map(({ id, name, avatar, isOnline }) => (
        <FriendItem key={id} name={name} avatar={avatar} isOnline={isOnline} />
      ))}
    </FriendListWrap>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default FriendList;
