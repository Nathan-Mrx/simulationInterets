import PropTypes from "prop-types";

function Card({className, children}) {
  return (
    <div className={"bg-white/60 p-4 rounded-2xl shadow-md border border-white " + className}>
      {children}
    </div>
  )
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

Card.defaultProps = {
  className: '',
  children: ''
}

export default Card;
