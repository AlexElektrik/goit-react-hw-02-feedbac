import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsList, StatisticsSpan } from './StatisticsStyles';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsList>
      <p>
        Good: <StatisticsSpan>{good}</StatisticsSpan>
      </p>
      <p>
        Neutral: <StatisticsSpan>{neutral}</StatisticsSpan>
      </p>
      <p>
        Bad: <StatisticsSpan>{bad}</StatisticsSpan>
      </p>
      <p>
        Total: <StatisticsSpan>{total}</StatisticsSpan>
      </p>
      <p>
        Positive feedback: <StatisticsSpan>{positivePercentage}% </StatisticsSpan>
      </p>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
