import React from 'react';
import PropTypes from 'prop-types';
import StatItem from './StatItem/StatItem';
import { StatList, StatisticsWrap } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrap className="statistics">
      {title && <h2 className="title">{title}</h2>}

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
