import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
const Icon = ({ type, className, ...rest }) => {
  return (
    <div>
      <svg
        {...rest}
        aria-hidden="true"
        className={classNames('icon', className)}
      >
        <use xlinkHref={`#${type}`}></use>
      </svg>
    </div>
  )
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
}
export default Icon
