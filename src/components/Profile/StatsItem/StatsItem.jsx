import PropTypes from 'prop-types';
import { ItemWrap, Label, Quantity } from "./StatsItem.styled";

const StatsItem = ({label, quantity}) => {
  return (
    <ItemWrap>
      <Label className="label">{label}</Label>
      <Quantity className="quantity">{new Intl.NumberFormat('en-US').format(quantity)}</Quantity>
    </ItemWrap>
  );
};

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
}.isRequired

export default StatsItem;