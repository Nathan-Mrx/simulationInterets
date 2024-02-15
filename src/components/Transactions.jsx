import Card from "./Card.jsx";
import PropTypes from "prop-types";
import Transaction from "./Transaction.jsx";

function Transactions({transactions, onDelete}) {
  return (
    transactions.length !== 0 &&
    <Card>
      <div className={'transactions flex-col-reverse flex p-6 '}>
        {transactions.map((transaction, index) => (
          <Transaction key={index} {...transaction} id={index} onDelete={() => onDelete(index)} />
        ))}
      </div>
    </Card>
  )
}

Transactions.propTypes = {
  transactions: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
}

Transactions.defaultProps = {
  transactions: []
}

export default Transactions;