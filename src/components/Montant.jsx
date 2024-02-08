import PropTypes from "prop-types";

function Montant({className, taux, transactions}) {

  function dateEff(dateParts, transac)
  {
    let mois = parseInt(dateParts[1])
    if (transac.type == "Dépot") {
      if (dateParts[0] > 15) {
        dateParts[0] = 1;
        dateParts[1] = `${mois + 1}`;

      } else {
        dateParts[0] = 15;
      }
    }
    else {
      if (dateParts[0] < 15) {
        dateParts[0] = 1;
      } else {
        dateParts[0] = 15;
      }
    }
    return dateParts
  }

  /**
   * date sous la forme "02-12-2012"
  */
  function montantAt( date, transactions)
  {
    let mnt = 0;
    date = date.split("-");
    let transacAt = [];
    transactions.forEach((transac) =>
    {
      if (transac.date[2] < date[2] &&
          transac.date[1] < date[1] &&
          transac.date[0] < date[0]) {
        if (transac.type == "Dépot")
          mnt += transac.montant;
        else
          mnt -= transac.montant;
      }
    })
    return mnt;
  }

  let montant = 0;
  let mntInteret = 0;
  transactions.forEach((transaction) => {
    let dateparts = transaction.date.split("-");
    transaction.date = dateEff(dateparts, transaction)
  });

  return (
    <div className={"bg-white p-4 rounded-2xl shadow-md  " + className}>
      <p>Montant avant interêt : {} </p>
      <p>Montant après interêt de : {taux} %</p>
      <h3>{montant + (montant*taux)/100}</h3>
    </div>
  )
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