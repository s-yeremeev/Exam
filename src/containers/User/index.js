import React from "react"
import "./index.scss"
import PropTypes from "prop-types"

const UserLayout = ({ children }) => {
  return (
    <section>
      {children}
    </section>
  )
}

UserLayout.propTypes = {
  children: PropTypes.object
}

export default UserLayout