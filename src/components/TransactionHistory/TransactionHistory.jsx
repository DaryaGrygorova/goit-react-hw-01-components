import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem/TransactionItem';
import {Table, TableHead, TableBody} from './TransactionHistory.styled'

const TransactionHistory = ({items}) => {
    return (
        <Table className="transaction-history">
            <TableHead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </TableHead>

            <TableBody>
                {items.map(({ id, type, amount, currency }) => (
                    <TransactionItem key={id} type={type} amount={amount} currency={currency} />
                ))}
            </TableBody>
        </Table>
    );
 };

TransactionHistory.propTypes = {
    items: PropTypes.exact({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
}.isRequired

export default TransactionHistory;