import PropTypes from 'prop-types';
import { ItemWrapper, Marker, Avatar, UserName } from './FriendItem.styled';

const FriendItem = ({ name, avatar, isOnline }) => {
  return (
    <ItemWrapper>
      <Marker isOnline={isOnline} className="status"></Marker>
      <Avatar className="avatar" src={avatar} alt="User avatar" width="48" />
      <UserName className="name">{name}</UserName>
    </ItemWrapper>
  );
};

FriendItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}.isRequired;

export default FriendItem;
