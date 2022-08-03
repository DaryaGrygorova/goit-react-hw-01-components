import React from 'react';
import PropTypes from 'prop-types';
import StatsItem from './StatsItem/StatsItem';
import {ProfileWrap, StatsList, Description} from './Profile.styled';


const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileWrap className="profile">
      <Description className="description">
        <img
          src={avatar}
          alt="User avatar"
          className="avatar"
        />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </Description>

      <StatsList className="stats">
        <StatsItem label="Followers" quantity={stats.followers}/>
        <StatsItem label="Views" quantity={stats.views}/>
        <StatsItem label="Likes" quantity={stats.likes}/>
      </StatsList>
    </ProfileWrap>
  ); };

Profile.propType = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired
}

export default Profile;