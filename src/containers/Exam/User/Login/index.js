import React from "react";
import { getItem, setItem } from "../../helpers/localStorage";
import InputComponent from "./Input";
import "./index.scss";

const inputs = [
    {
      inputType: "name",
      inputId: "#{label}",
      labelFor: "#{label}",
      inputText: "Username"      
    },
    {
        inputType: "password",
        inputId: "#{label}",
        labelFor: "#{label}",
        inputText: "Password"    
    }
  ]

export default class LoginContainer extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section>
               <div className="container">
                    <div className="card"></div>
                    <div className="card">
                        <h1 className="title">Login</h1>
                        <form>
                            <div className="input-container">
                                <input type="#{type}" id="#{label}" required="required" />
                                <label for="#{label}">Username</label>
                                <div className="bar"></div>
                            </div>
                            <div className="input-container">
                                <input type="#{type}" id="#{label}" required="required" />
                                <label for="#{label}">Password</label>
                                <div className="bar"></div>
                            </div>
                            <div className="button-container">
                                <button><span>Go</span></button>
                            </div>
                        </form>
                    </div>
                    <div className="card alt">
                        <div className="toggle"></div>
                        <h1 className="title">Register
                    <div className="close"></div>
                        </h1>
                        <form>
                        {
                        inputs.map((index, input) => (
                          <InputComponent
                          {...input} 
                            key={index}
                          />
                        ))
                      }

                      <div class="input-container">
                            <input type="#{type}" id="#{label}" required="required"/>
                            <label for="#{label}">Repeat Password</label>
                            <div class="bar"></div>
                        </div>
                            <div className="button-container">
                                <button><span>Next</span></button>
                            </div>
                        </form>
                    </div>
                </div>
                <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
            </section>
        )
    }
}