import React from 'react';
import PropTypes from 'prop-types';

function Transaction({type, montant, date}) {
  let dateParts = date.split('-')
  return (
    <div className={(type === "Dépot" ? "bg-green-200" : "bg-red-200") + " p-4 my-2 rounded-2xl border border-solid border-black"}>
      <p className={"text-2xl underline"}>{type}</p>
      <p>Montant : {montant}€</p>
      <p>Date : {dateParts[2]}/{dateParts[1]}/{dateParts[0]}</p>
    </div>
  )
}

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  montant: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired
}

Transaction.defaultProps = {
  type: 'Dépot',
  montant: 0,
  date: 'Non renseigné'
}

export default Transaction;