import React from "react"
import PropTypes from "prop-types"

/**
 * 
 * @param {String} inputType 
 * @param {String} inputId 
 * @param {String} labelFor 
 * @param {String} inputText 
 * @param {function} blur 
 * @param {function} errorValidation 
 * @param {function} validations 
 * @param {function} functionref 
 * @function {InputComponent}
 * @return {React.Component}  
 */
const InputComponent = ({
  inputType,
  inputId,
  labelFor,
  inputText,
  blur,
  errorValidation,
  validations,
  functionref
}) => {
  return (
    <div className="input-container">
      {
        !errorValidation ? null : (<p className="help is-danger">{errorValidation}</p>)
      }
      <input
        ref={functionref}
        className={`input ${!errorValidation ? null : "is-danger"}`}
        type={inputType}
        id={inputId}
        required="required"
        onBlur={({ target: { value } }) => blur(value, inputId, validations)}
      />

      <label
        htmlFor={labelFor}
      >
        {inputText}
      </label>
      <div className="bar"></div>
    </div>
  )
}

export default InputComponent