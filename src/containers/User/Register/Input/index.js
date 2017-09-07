import React from "react"
import PropTypes from "prop-types"

const InputComponent = ({
  labelText,
  placeholderText,
  typeInput,
  handleBlur,
  isValid,
  inputId,
  validation,
  functionRef
}) => {
  return (
    <div>
      <label className="label">{labelText}</label>
      <p className="control">
        <input
          ref={functionRef}
          className={`input ${!isValid ? null : "is-danger"}`} 
          type={typeInput} 
          placeholder={placeholderText}
          onBlur={({ target: { value }}) => handleBlur(value, inputId, validation)}
        />
      </p>
      {
        !isValid ? null : (<p className="help is-danger">{isValid}</p>)
      }
    </div>
  )
}

InputComponent.propTypes = {
  labelText: PropTypes.string,
  placeholderText: PropTypes.string,
  typeInput: PropTypes.string,
  handleBlur: PropTypes.func,
  isValid: PropTypes.string,
  inputId: PropTypes.string,
  validation: PropTypes.func,
  functionRef: PropTypes.func
}

export default InputComponent