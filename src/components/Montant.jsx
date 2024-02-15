import PropTypes from "prop-types";

// The Montant component takes three props: className, taux (interest rate), and transactions.
function Montant({className, taux, transactions}) {
  // Calculate the effective date when the transaction occured (15 by 15).
  // Depending of the type of the transaction
  function dateEff(dateParts, transac) {
    let mois = parseInt(dateParts[1])
    if (transac.type == "Dépot") {
      if (dateParts[0] > 15) {
        dateParts[0] = 1;
        dateParts[1] = `${mois + 1}`;

      } else {
        dateParts[0] = 15;
      }
    } else {
      if (dateParts[0] < 15) {
        dateParts[0] = 1;
      } else {
        dateParts[0] = 15;
      }
    }
    return dateParts
  }

  // The calculateInterest function calculates the interest for a single transaction.
  // It takes the transaction amount, the interest rate, and the transaction date as parameters.
  const calculateInterest = (amount, rate, date) => {
    // Convert the transaction date to a Date object.
    const transactionDate = new Date(date);
    // Get the current date.
    const currentDate = new Date();
    // Calculate the difference in time between the current date and the transaction date.
    const diffTime = Math.abs(currentDate - transactionDate);
    // Convert the difference in time to a difference in days.
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    // Calculate the number of 15-day periods.
    const periods = Math.floor(diffDays / 15);
    // Calculate the interest for the transaction.
    return periods > 0 ? amount * Math.pow(1 + rate / 100, periods) - amount : 0;
  };

  let totalAmount = transactions.reduce((total, transaction) => {
    return total + Number(transaction.montant);
  }, 0);

  let totalInterest = 0;
  // Iterate over the transactions.
  transactions.forEach(transaction => {
    let dateParts = transaction.date.split('-');
    dateParts = dateEff(dateParts, transaction);
    // Calculate the interest for the transaction.
    const interest = calculateInterest(transaction.montant, taux, dateParts.join('-'));
    // Add the interest to totalInterest.
    totalInterest += interest;
    // Ensure transaction.montant is a number before adding it to totalAmount.
    const montant = Number(transaction.montant);
    if (!isNaN(montant)) {
      totalAmount += montant;
    }
  });

  // Calculate the total amount with interest.
  const totalWithInterest = totalAmount + totalInterest;

  // Return a div that displays the total interest, the total amount without interest, and the total amount with interest.
  return (
    <div className={className}>
      <p>Total interest: {totalInterest.toFixed(2)}€</p>
      <p>Total amount without interest: {totalAmount.toFixed(2)}€</p>
      <p>Total amount with interest: {totalWithInterest.toFixed(2)}€</p>
    </div>
  );
}

Montant.propTypes = {
  className: PropTypes.string,
  taux: PropTypes.number,
  transactions: PropTypes.array,
}

Montant.defaultProps = {
  className: '',
  taux: 0,
  transactions: [],
}

export default Montant;