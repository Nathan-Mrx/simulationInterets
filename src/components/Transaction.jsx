import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";



function Transaction({type, montant, date, onDelete}) {

  let dateParts = date.split('-')

  return (
    <div className={(type === "Dépot" ? "bg-green-300/60 border-green-400/60" : "bg-red-300/60 border-red-400/60") + " my-2 p-4 rounded-2xl shadow-md border flex justify-between align-content-center"}>
      <div className={"flex gap-5"}>
        <span className={"text-2xl underline"}>{type}</span>
        <span className={"text-2xl"}>{montant}€</span>
      </div>
      <div className={"flex gap-5"}>
        <p className={"text-2xl"}>{dateParts[2]}/{dateParts[1]}/{dateParts[0]}</p>
        <button type={'delete'} className={"bg-red-300/60 border border-red-400/60 rounded-full p-2 px-4 shadow-m "}
                onClick={onDelete}>
          <FontAwesomeIcon icon={faTrash}/></button>
      </div>

    </div>
  )
}

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  montant: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}

Transaction.defaultProps = {
  type: 'Dépot',
  montant: 0,
  date: 'Non renseigné',
  onDelete: () => {},
}

export default Transaction;