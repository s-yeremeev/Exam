import React from "react";

export default class LoginContaineer extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="pen-title">
                    <h1>Material Login Form</h1><span>Pen <i className='fa fa-code'></i> by <a href='http://andytran.me'>Andy Tran</a></span>
                </div>
                <div className="rerun"><a href="">Rerun Pen</a></div>
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
                            <div className="footer"><a href="#">Forgot your password?</a></div>
                        </form>
                    </div>
                    <div className="card alt">
                        <div className="toggle"></div>
                        <h1 className="title">Register
    <div className="close"></div>
                        </h1>
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
                            <div className="input-container">
                                <input type="#{type}" id="#{label}" required="required" />
                                <label for="#{label}">Repeat Password</label>
                                <div className="bar"></div>
                            </div>
                            <div className="button-container">
                                <button><span>Next</span></button>
                            </div>
                        </form>
                    </div>
                </div>
                <a id="portfolio" href="http://andytran.me/" title="View my portfolio!"><i className="fa fa-link"></i></a>
                <a id="codepen" href="https://codepen.io/andytran/" title="Follow me!"><i className="fa fa-codepen"></i></a>
                <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

                <script src="./indexscript.js"></script>
            </div>
        )
    }
}