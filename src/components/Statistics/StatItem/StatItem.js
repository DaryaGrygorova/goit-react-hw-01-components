import PropTypes from 'prop-types';
import { ItemWrapper } from "./StatItem.styled";

const StatItem = ({label, percentage}) => {
  return (
    <ItemWrapper style={{backgroundColor: '#d6fa3c'}}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </ItemWrapper>
  );
};

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}.isRequired

export default StatItem;