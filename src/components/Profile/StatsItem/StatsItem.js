import PropTypes from 'prop-types';
import { ItemWrap } from "./StatsItem.styled";

const StatsItem = ({label, quantity}) => {
  return (
    <ItemWrap>
      <span className="label">{label}</span>
      <span className="quantity">{quantity}</span>
    </ItemWrap>
  );
};

StatsItem.propTypes = PropTypes.exact({
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
})

export default StatsItem;