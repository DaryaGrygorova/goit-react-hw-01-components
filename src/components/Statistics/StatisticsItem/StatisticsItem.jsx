import PropTypes from 'prop-types';
import { ItemWrapper, Label, Percentage } from './StatisticsItem.styled';

const StatItem = ({ label, percentage }) => {
  return (
    <ItemWrapper percentage={percentage}>
      <Label className="label">{label}</Label>
      <Percentage className="percentage">{percentage}%</Percentage>
    </ItemWrapper>
  );
};

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}.isRequired;

export default StatItem;
