
import { Notification } from '../Notification/Notification';
import PropTypes from 'prop-types';
import { StatisticsList } from './Statistics.styled';

export function Statistics ({good, neutral, bad, total, positivePercentage}) {
        return isNaN(positivePercentage) ? (
      <Notification message="There is no feedback" />
    ) : (
      <StatisticsList>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage} %</li>
      </StatisticsList>
    );
  
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
