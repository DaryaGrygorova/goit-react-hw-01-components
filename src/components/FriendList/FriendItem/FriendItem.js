import PropTypes from 'prop-types';
import { ItemWrapper } from "./FriendItemItem.styled";

const FriendItem = ({name, avatar, isOnline}) => {
  return (
    <ItemWrapper>
      <span className={`status ${isOnline && "online"} `}>*</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </ItemWrapper>
  );
};

FriendItem.propTypes = PropTypes.exact({
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
})

export default FriendItem;