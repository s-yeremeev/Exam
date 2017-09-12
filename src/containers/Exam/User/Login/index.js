import React from "react";
import { getItem, setItem } from "../../helpers/localStorage";
import InputComponent from "./Input";
import * as constants from "./constants"
import * as validation from "./Input/valid"
import { browserHistory } from "react-router"
import "./index.scss";

const inputsLogin = [
    {
        inputType: "#{type}",
        inputId: constants.ID_USERNAME,
        labelFor: "#{label}",
        inputText: "Username",
        validations: validation.validateLogin
    },
    {
        inputType: "#{type}",
        inputId: constants.ID_PASSWORD,
        labelFor: "#{label}",
        inputText: "Password",
        validations: validation.validateLogin
    }
]

const inputsRegister = [
    {
        inputType: "#{type}",
        inputId: constants.ID_USERNAME_REG,
        labelFor: "#{label}",
        inputText: "Username",
        validations: validation.validateReg
    },
    {
        inputType: "#{type}",
        inputId: constants.ID_PASSWORD_REG,
        labelFor: "#{label}",
        inputText: "Password",
        validations: validation.validateReg
    },
    {
        inputType: "#{type}",
        inputId: constants.ID_REPEAT_PASSWORD_REG,
        labelFor: "#{label}",
        inputText: "Repeat Password",
        validations: validation.validateReg
    }
]

/**
 * @class {LoginContainer}
 * @return {React.Component}  
 * container login and register page 
 */
export default class LoginContainer extends React.PureComponent {
    state = {
        active: false,
        errors: {},
        user: {}
    }
    constructor(props) {
        super(props)
    }

    toggleClick = () => {
        this.setState({
            active: !this.state.active
        });
    }

    functionBlur = (value, inputId, errorValidation) => {
        const passwordValue = this[constants.ID_PASSWORD_REG].value
        const message = errorValidation(inputId, passwordValue, value);
        if (typeof message != "undefined") {
            this.setState(({ errors }) => ({
                errors: {
                    ...errors,
                    [inputId]: message
                }
            }))
        } else {
            this.setState(({ errors }) => {
                delete this.state.errors[inputId]
                return {
                    errors: { ...errors }
                }
            })

            if (inputId == constants.ID_USERNAME_REG || inputId == constants.ID_PASSWORD_REG || inputId == constants.ID_REPEAT_PASSWORD_REG) {
                this.setState(({ user }) => ({
                    user: {
                        ...user,
                        [inputId]: value
                    }
                }))
            }
        }
    }

    handleRegisterClick = async (event) => {
        event.preventDefault()
        const _errors = inputsRegister.map(({ inputId, validations }) => {
            const blur = this.functionBlur(this[inputId].value, inputId, validations)
        })
       if ( Object.keys(this.state.user).length == 3 ) {
            const users = await getItem("users").catch(() => Promise.resolve([]))
            users.push(this.state.user)
            await Promise.all([
                setItem("users", users),
            ])
            browserHistory.push("/notes")
        }
    }

    handleLoginClick = async (event) => {
        event.preventDefault()
        const _errors = inputsLogin.map(({ inputId, validations }) => {
            const blur = this.functionBlur(this[inputId].value, inputId, validations)
        })
        const users = await getItem("users").catch(() => Promise.resolve([]))
        if(typeof users == "undefined") {
            this.setState({
                active: true
            })
        } else {
            const _user = users.find(user => user.ID_USERNAME_REG == this[constants.ID_USERNAME].value && user.ID_PASSWORD_REG == this[constants.ID_PASSWORD].value)
                if (_user) {
                    browserHistory.push("/notes")
                } else {
                    this.setState({
                        active: true
                    })
                }
        }
    }

    render() {
        const { active, errors } = this.state
        const buttonClass = this.state.active ? 'container active' : 'container';
        return (
            <div>
                <div className="pen-title">
                    <h1>Material Login Form</h1>
                </div>
                <div className={buttonClass}>
                    <div className="card"></div>
                    <div className="card">
                        <h1 className="title">Login</h1>
                        <form>
                            {
                                inputsLogin.map(({ inputId, inputType, labelFor, inputText, blur, errorValidation, validations }, index) => (
                                    <span
                                        key={index}
                                    >
                                        <InputComponent
                                            functionref={(input) => { this[inputId] = input }}
                                            blur={this.functionBlur}
                                            errorValidation={errors[inputId]}
                                            inputType={inputType}
                                            labelFor={labelFor}
                                            inputText={inputText}
                                            validations={validations}
                                            inputId={inputId}
                                        />
                                    </span>
                                ))
                            }
                            <div className="button-container">
                                <button
                                    onClick={this.handleLoginClick}
                                >
                                    <span>Go</span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="card alt">
                        <div onClick={this.toggleClick} className="toggle"></div>
                        <h1 className="title">Register
                    <div onClick={this.toggleClick} className="close"></div>
                        </h1>
                        <form>
                            {
                                inputsRegister.map(({ inputId, inputType, labelFor, inputText, blur, errorValidation, validations }, index) => (
                                    <span
                                        key={index}
                                    >
                                        <InputComponent
                                            functionref={(input) => { this[inputId] = input; }}
                                            blur={this.functionBlur}
                                            errorValidation={errors[inputId]}
                                            inputType={inputType}
                                            labelFor={labelFor}
                                            inputText={inputText}
                                            validations={validations}
                                            inputId={inputId}
                                        />
                                    </span>
                                ))
                            }
                            <div className="button-container">
                                <button
                                    onClick={this.handleRegisterClick}
                                >
                                    <span>Next</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <a id="portfolio" htmlFor="http://andytran.me/" title="View my portfolio!"><i className="fa fa-link"></i></a>
                <a id="codepen" htmlFor="https://codepen.io/andytran/" title="Follow me!"><i className="fa fa-codepen"></i></a>
                <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
                <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
            </div>
        )
    }
}