import React from "react"
import PropTypes from "prop-types"

const InputComponent = ({
  inputType,
  inputClassNames,
  iconClassNames,
  inputPlaceholder,
  inputRef,
  handlerInputBlur,
  inputId,
  validation,
  isValid
}) => {
  return (
    <p className="control has-icon has-icon-right">
      <input 
        ref={inputRef}
        className={`input ${inputClassNames.join(" ")} ${!isValid ? null : "is-danger"}`}
        type={inputType}
        placeholder={inputPlaceholder}
        onBlur={event => handlerInputBlur(event, inputId, validation)}
      />
      <span className="icon user">
        <i className={`fa ${iconClassNames.join(" ")}`}></i>
      </span>
    </p>
  )
}

InputComponent.propTypes = {
  inputType: PropTypes.string,
  inputClassNames: PropTypes.arrayOf(PropTypes.string),
  iconClassNames: PropTypes.arrayOf(PropTypes.string),
  inputPlaceholder: PropTypes.string,
  inputRef: PropTypes.func,
  handlerInputBlur: PropTypes.func,
  inputId: PropTypes.string,
  validation: PropTypes.func,
  isValid: PropTypes.bool
}

export default InputComponent