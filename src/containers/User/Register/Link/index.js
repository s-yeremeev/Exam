import React from "react"
import { Link } from "react-router"
import PropTypes from "prop-types"

const LinkComponent = ({
  linkHref,
  linkText
}) => {
  return (
    <Link to={linkHref}>
      {linkText}
    </Link>
  )
}

LinkComponent.propTypes = {
  linkHref: PropTypes.string,
  linkText: PropTypes.string
}

export default LinkComponent