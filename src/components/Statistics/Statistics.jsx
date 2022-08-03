import React from 'react';
import PropTypes from 'prop-types';
import StatItem from './StatisticsItem/StatisticsItem';
import {Title, StatList, StatisticsWrap } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrap className="statistics">
      {title && <Title className="title">{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem
            key={id}
            className="item"
            label={label}
            percentage={percentage}
          />
        ))}
      </StatList>
    </StatisticsWrap>
  );
};

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
}.isRequired

export default Statistics;
