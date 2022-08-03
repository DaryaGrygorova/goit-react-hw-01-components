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

TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}.isRequired
     
export default TransactionItem;