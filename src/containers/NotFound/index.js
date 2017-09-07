import React from "react"

export default class NotFoundContainer extends React.PureComponent {
  state = {
    value: null
  }
  
  handleSelectChange = (event) => {
    console.log(event.target.value)
    this.setState({
      value: event.target.value
    })
  }

  render() {
    const { value } = this.state
    return (
      <div>
        <strong>404</strong>
        <select 
          value={value}
          onChange={this.handleSelectChange}
        >
          <option value={"1"}>1</option>
          <option value={"2"}>2</option>
          <option value={"3"}>3</option>
        </select>
      </div>
    )
  }
}