import * as constant from "../constants"

/**
 * 
 * @param {String} inputId 
 * @param {String} passwordValue 
 * @param {String} value 
 * @function {validateReg}
 * validatiom for inputs register
 */
export const validateReg = function (inputId, passwordValue, value) {
  if (inputId == constant.ID_PASSWORD_REG) {
    if (!constant.REG_PASS.test(value)) return constant.PASSWORD + " is not valid!"
  } else if (inputId == constant.ID_REPEAT_PASSWORD_REG) {
      if (passwordValue != value) return constant.REPEAT_PASSWORD + " is not equal with " + constant.PASSWORD + "!"
      else if (!constant.REG_PASS.test(value)) return constant.REPEAT_PASSWORD + " is not valid!"    
  } else if (inputId == constant.ID_USERNAME_REG) {
    if (!constant.REG_NAME.test(value)) return constant.USERNAME + "  is not valid!"
  }
}

/**
 * 
 * @param {String} inputId 
 * @param {String} passwordValue 
 * @param {String} value 
 * @function {validateReg}
 * validatiom for inputs login
 */
export const validateLogin = function (inputId, passwordValue, value) {
  if (inputId == constant.ID_PASSWORD) {
    if (!constant.REG_PASS.test(value)) return constant.PASSWORD + " is not valid!"
  } else if (inputId == constant.ID_USERNAME) {
    if (!constant.REG_NAME.test(value)) return constant.USERNAME + "  is not valid!"
  }
}