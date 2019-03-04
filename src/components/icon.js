import React from 'react'

const Icon = ({name, className = ''}) => (
  <svg className={`icon ${className}`}>
    <use xlinkHref={`#icon${name}`} />
  </svg>
)

export default Icon
