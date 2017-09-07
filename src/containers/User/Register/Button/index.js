import React from "react"
import PropTypes from "prop-types"

const ButtonComponent = ({ 
  classNames,
  buttonText,
  isDisabled,
  handleClick
}) => {
  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      className={`button ${classNames.join(" ")}`}
    >
      {buttonText}
    </button>
  )
}

ButtonComponent.propTypes = {
  classNames: PropTypes.arrayOf(PropTypes.string),
  buttonText: PropTypes.string,
  isDisabled: PropTypes.bool,
  handleClick: PropTypes.func 
}

export default ButtonComponent