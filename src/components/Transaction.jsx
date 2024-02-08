import React from 'react';
import PropTypes from 'prop-types';

function Transaction({type, montant, date}) {
  let dateParts = date.split('-')
  return (
    <div className={(type === "Dépot" ? "bg-green-300/60 border-green-400/60" : "bg-red-300/60 border-red-400/60") + " p-4 my-2 p-4 rounded-2xl shadow-md border"}>
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