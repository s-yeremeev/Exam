import React from "react"
import PropTypes from "prop-types"

const InputComponent = ({
  inputType,
  inputId,
  labelFor,
  inputText
}) => {
  return (
    <div className="input-container">
      <input type={inputType} id={inputId} required="required" />
      <label for={labelFor}>{inputText}</label>
      <div className="bar"></div>
    </div>
  )
}

InputComponent.propTypes = {
  inputId: PropTypes.string,
  inputText: PropTypes.string
}

export default InputComponent