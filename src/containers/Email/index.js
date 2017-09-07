import React from "react"
import MenuComponent from "./Menu"
import { browserHistory } from "react-router"
import "./index.scss"
import { getItem, setItem } from "../../helpers/localStorage" 
import PropTypes from "prop-types"

export default class EmailContainer extends React.PureComponent {
  state = {
    user: null
  }

  getChildContext() {
    const { user } = this.state
    return {
      user
    }
  }

  static childContextTypes = {
    user: PropTypes.object
  }
  
  async componentDidMount() {
    const user = await getItem("user")
    this.setState({
      user
    })
  }

  constructor(props) {
    super(props)
  }

  handleLogoutClick = async () => {
    await setItem("user", null)
    browserHistory.push("/")
  }

  render() {
    const { children } = this.props
    const { user } = this.state

    return (
      <div id="layout" className="content pure-g">
        <MenuComponent 
          handleLogoutClick={this.handleLogoutClick}
        />
        {user && children || null}
      </div>
    )
  }
}