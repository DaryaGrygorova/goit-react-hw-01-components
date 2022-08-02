import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem/TransactionItem';
import {Table} from './TransactionHistory.styled'

const TransactionHistory = ({items}) => {
    return (
        <Table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <TransactionItem key={id} type={type} amount={amount} currency={currency} />
                ))}
            </tbody>
        </Table>
    );
 };

TransactionHistory.propTypes = PropTypes.exact({
    items: PropTypes.array.isRequired,
})

export default TransactionHistory;