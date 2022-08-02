import PropTypes from 'prop-types';
import { TableRow } from './TransactionItem.styled';

const TransactionItem = ({type, amount, currency}) => {
    return (
    <TableRow>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TableRow>
)
}

TransactionItem.propTypes = PropTypes.exact({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
})     
export default TransactionItem;