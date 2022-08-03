import React from 'react';
import PropTypes from 'prop-types';
import StatsItem from './StatsItem/StatsItem';
import {
  ProfileWrap,
  StatsList,
  Description,
  Avatar,
  Username,
  Tag,
  Location,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileWrap className="profile">
      <Description className="description">
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <Username className="name">{username}</Username>
        <Tag className="tag">@{tag}</Tag>
        <Location className="location">{location}</Location>
      </Description>

      <StatsList className="stats">
        <StatsItem label="Followers" quantity={stats.followers} />
        <StatsItem label="Views" quantity={stats.views} />
        <StatsItem label="Likes" quantity={stats.likes} />
      </StatsList>
    </ProfileWrap>
  );
};

Profile.propType = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
