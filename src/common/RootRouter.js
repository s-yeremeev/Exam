import React from "react"
import { Router, Route, IndexRoute, browserHistory } from "react-router"
import LoginContainer from "../containers/Exam/User/Login"
import NoteContainer from "../containers/Exam/Note"


export default class RootRouter extends React.PureComponent {
  
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/">
          <IndexRoute component={LoginContainer} />
            <Router path="notes" component={NoteContainer}/>            
            <Route path="login" component={LoginContainer} />
        </Route>
      </Router>
    )
  }
}