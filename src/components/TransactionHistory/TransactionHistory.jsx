import TransactionsItem from "./Transactionslist";
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => {
  return (
    <div className={css.table_container}>
      <table className={css.custom_table}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        {transactions.map((transaction) => (
          <TransactionsItem key={transaction.id} {...transaction} />
        ))}
      </table>
    </div>
  );
};

export default TransactionHistory;
