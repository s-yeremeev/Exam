import React from "react"
import { Router, Route, IndexRoute, browserHistory } from "react-router"
import UserContainer from "../containers/User"
import RegisterContainer from "../containers/User/Register"
import LoginContainer from "../containers/User/Login"
import EmailContainer from "../containers/Email"
import ListContainer from "../containers/Email/List"
import { getItem } from "../helpers/localStorage"
import NotFoundContainer from "../containers/NotFound"
import NoteContainer from "../containers/Exam/Note"
import NoteComponent from "../containers/Exam/Note/NoteApi"


export default class RootRouter extends React.PureComponent {
  isAuth = async () => {
    try {
      const user = await getItem("user")
      if (!user) throw new Error("User is undefined!")
    } catch (err) {
      console.error(err.message)
      browserHistory.push("/")
    }
  }
  
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/">
          <IndexRoute component={LoginContainer} />
            <Router path="notes" component={NoteContainer}>
                <Router path="note/:view" component={NoteComponent}/>
            </Router>
          <Route path="user" component={UserContainer}>
            <Route path="login" component={LoginContainer} />
            <Route path="register" component={RegisterContainer} />
          </Route>
          <Route path="email" onEnter={this.isAuth} component={EmailContainer}>
            <Route path="list/:view" component={ListContainer} />
          </Route>
          <Route path="*" component={NotFoundContainer} />
        </Route>
      </Router>
    )
  }
}