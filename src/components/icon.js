import React from 'react'

const Icon = ({name, className = '', ...attrs}) => (
  <svg className={`icon ${className}`} {...attrs}>
    <use xlinkHref={`#icon-${name}`} />
  </svg>
)

export default Icon
